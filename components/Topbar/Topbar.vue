<template>
    <nav class = "topbar">
        <div class = "topbar__rel">
            <SidebarExtender v-if = "width <= wideScreenWidth"/>
            <div class = "topbar__logoSearch" v-else >
                <Logo />
                <Search />
            </div>
            <TopbarLinks />
            <UserPanel />
        </div>
    </nav>
</template>


<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters({
            wideScreenWidth: 'constants/wideScreen',
            width: 'user/width'
        }),
    }
}
</script>

<style lang = "scss">
@import "~/assets/scss/_variables.scss";

.topbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 6rem;
    z-index: 10;
    background-color: var(--topbar-background-color);
    padding: 0 2rem;
    &__rel {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: $wideScreenWidth) {
            justify-content: space-between;
        }
    }
    &__logoSearch {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
    }
}
</style>
