<template>
    <div class = "mainContainer mainContainer--singleLine">
        <Topbar :class = "'singleLine'">
            <TopbarLinks />
            <UserPanel />
        </Topbar>
        <Main :class = "'singleLine'">
            <Nuxt />
            <SidebarLinks />
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
        this.setPassword();
        this.setEmail();
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
        setEmail() {
            this.$store.commit('user/setEmail', localStorage.getItem('email') || '');
        },
        setPassword() {
            this.$store.commit('user/setPassword', localStorage.getItem('password') || '');
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
.mainContainer {
    &--singleLine {
        min-height: 100vh;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0px' y='0px' viewBox='0 0 3015 1675' style='enable-background:new 0 0 3015 1675;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23242526;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M789.7,1675H3015V0H1691.5c-135.3,139.6-212,346.2-161.6,540.2c78.9,303.7-102.7,471.9-304.3,543 c-201.6,71.1-536,284.2-461.2,529.2C771.2,1634.4,779.7,1655.4,789.7,1675z'/%3E%3C/g%3E%3C/svg%3E");    background-size: cover;
        background-position: center bottom;
        background-attachment: fixed;
        background-repeat: no-repeat;
    }
}
</style>
