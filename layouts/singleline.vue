<template>
    <div class = "mainContainer">
        <Topbar>
            <SidebarExtender/>
            <div class = "topbar__logoSearch">
                <Logo />
            </div>
            <TopbarLinks />
        </Topbar>
        <Main>
            <Nuxt />
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
