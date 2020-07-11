<template>
    <div class = "logoSearchContainer">
        <div class = "logoSearchContainer__searchAndTitleContainer">
            <span v-if = "width < tabletWidth" class = "logoSearchContainer__title">Iskanje</span>
            <Logo v-if = "width >= tabletWidth" />
            <Search />
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters({
            tabletWidth: 'constants/tablet',
            width: 'user/width'
        }),
    },
}
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";

.logoSearchContainer {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    &__searchAndTitleContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        @media screen and (max-width: $mobileWideWidth) {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
        }
    }
    &__title {
        font-weight: 600;
        color: var(--sidebar-link-color);
        font-size: 1.6rem;
    }
    @media screen and (max-width: $tabletWidth) {
		width: calc(100% - 2rem);
        left: 1rem;
	}
}
</style>
