<template>
    <div class = "mainContainer">
        <Sidebar>
            <div class = "sidebar__logoSearch" v-if="width < wideScreenWidth">
                <Logo v-if = "width > mobileWideWidth" />
                <Search />
            </div>
            <div v-if = "isAuthenticated" class = "sidebar__userPreferences">

            </div>
            <div v-else class = "sidebar__login">
                <h3 class = "sidebar__loginTitle">Prijava</h3>
                <p class = "sidebar__loginText">Prijavljeni uporabniki imajo možnost komentiranja, podajanja ocen, všečkanja komentarjev, nagrajevanje uporabnikov in mnogo več!</p>
                <LoginButton :class = "'loginButton--sidebar'" />
            </div>
            <Navigation />
            <SidebarLinks />
        </Sidebar>
        <Topbar>
            <SidebarExtender v-if = "width < wideScreenWidth"/>
            <div v-else class = "topbar__logoSearch">
                <Logo />
                <Search />
            </div>
            <TopbarLinks />
            <UserPanel />
        </Topbar>
        <Main>
            <Nuxt />
            <RecommendedProfessors />
        </Main>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters({
            anonymousUserTitle: 'constants/anonymousUserTitle',
            username: 'user/username',
            color: 'user/color',
            width: 'user/width',
            wideScreenWidth: 'constants/wideScreen',
            mobileWideWidth: 'constants/mobileWide',
            profileColors: 'constants/profileColors',
            isAuthenticated: 'user/isAuthenticated'
        })
    },
    mounted() {
        /**
         * Attach resize event listeners
         */
        window.addEventListener('resize', () => {
            this.updateWidth(window.innerWidth);
            this.updateHeight(window.innerHeight);
        });
        /**
         * Get current width & height
         */
        this.updateWidth(window.innerWidth);
        this.updateHeight(window.innerHeight);

        this.setUsername();
        this.setColor();
        this.setAccessToken();
        this.setRefreshToken();
        this.setExpiresIn();
        this.updateLocalStorage({
            color: this.color
        });
    },
    methods: {
        updateLocalStorage(object) {
            function isSet(property) {
                return !!localStorage.getItem(property);
            }
            for(const property in object) {
                if(!isSet(property)) {
                    localStorage.setItem(`${property}`, object[property]);
                }
            }
        },
        updateWidth(width) {
            this.$store.commit('user/updateWidth', width);
        },
        updateHeight(height) {
            this.$store.commit('user/updateHeight', height);
        },
        setUsername() {
            this.$store.commit('user/setUsername', localStorage.getItem('username') || this.anonymousUserTitle);
        },
        setColor() {
            this.$store.commit('user/setColor', localStorage.getItem('color') || this.profileColors[Math.floor(Math.random() * Math.floor(this.profileColors.length))]);
        },
        setAccessToken() {
            this.$store.commit('user/setAccessToken', localStorage.getItem('access_token') || '');
        },
        setRefreshToken() {
            this.$store.commit('user/setRefreshToken', localStorage.getItem('refresh_token') || '');
        },
        setExpiresIn() {
            this.$store.commit('user/setExpiresIn', localStorage.getItem('expires_in') || 0);
        }
    }
}
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";

.mainContainer {
    display: flex;
    justify-content: center;
    @media screen and (max-width: $wideScreenWidth) {
		justify-content: flex-start;
	}
    @media screen and (max-width: $tabletWidth) {
		justify-content: center;
	}
}
</style>
