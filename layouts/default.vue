<template>
    <div>
        <Sidebar />
        <Topbar />
        <RecommendedProfessors />
        <main>
            <Nuxt />
        </main>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
            profileColors: [
                '#001f3f',
                '#7FDBFF',
                '#39CCCC',
                '#3D9970',
                '#2ECC40',
                '#01FF70',
                '#FFDC00',
                '#FF851B',
                '#FF4136',
                '#85144b',
                '#F012BE',
                '#B10DC9',
                '#111111',
                '#AAAAAA',
                '#DDDDDD',
            ],
        }
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
    },
    computed: {
        ...mapGetters({
            anonymousUserTitle: 'constants/anonymousUserTitle',
            username: 'user/username',
        })
    },
    methods: {
        updateWidth(width) {
            this.$store.commit('user/updateWidth', width);
        },
        updateHeight(height) {
            this.$store.commit('user/updateHeight', height);
        },
        setUsername() {
            this.$store.commit('user/setUsername', localStorage.getItem('username') || anonymousUserTitle);
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
</style>
