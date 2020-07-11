<template>
    <nav class = "topbar">
        <div class = "topbar__rel">
            <SidebarExtender v-if = "width < tabletWidth"/>
            <LogoSearch v-if = "width >= tabletWidth" />
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
            tabletWidth: 'constants/tablet',
            width: 'user/width'
        }),
    }
}
</script>

<style lang = "scss">
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
        @media screen and (max-width: 768px) {
            justify-content: space-between;
        }
    }
}
</style>
