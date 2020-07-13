<template>
    <div class = "login">
        <Login/>
    </div>
</template>


<script>
import {mapGetters} from 'vuex';
export default {
    layout: 'singleline',
    computed: {
        ...mapGetters({
            anonymousUserTitle: 'constants/anonymousUserTitle',
            username: 'user/username',
            color: 'user/color',
            width: 'user/width',
            wideScreenWidth: 'constants/wideScreen',
            mobileWideWidth: 'constants/mobileWide',
            profileColors: 'constants/profileColors',
            isAuthenticated: 'user/isAuthenticated',
            text: 'constants/text',
            appName: 'constants/name'
        })
    },
    mounted() {
        if(this.isAuthenticated) {
            this.$router.push(`/racun/${username}`)
        }
    }
}
</script>



<style lang="scss">
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    &__title {
        font-size: 2.4rem;
        text-align: center;
        color: white;
        font-weight: 400;
    }
}
</style>
