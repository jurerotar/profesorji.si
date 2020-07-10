<template>
    <div class = "logoSearchContainer">
        <div class = "logoSearchContainer__searchAndTitleContainer">
            <span v-if = "width < 768" class = "logoSearchContainer__title">Iskanje</span>
            <Logo v-if = "width >= 768" />
            <Search />
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters({
            width: 'user/width'
        }),
    },
}
</script>

<style lang="scss">
.logoSearchContainer {
    display: flex;
    position: absolute;
    top: .5rem;
    left: 2rem;
    &__searchAndTitleContainer {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 768px) {
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
    @media screen and (max-width: 768px) {
		width: calc(100% - 2rem);
        left: 1rem;
	}
}
</style>
