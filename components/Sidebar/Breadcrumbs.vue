<template>
    <div class = "breadcrumbs">
        <div class = "breadcrumbs__row">
            <span class = "breadcrumbs__link" v-for="selection in selections" v-bind:key = "selection.id">
                <span class = "breadcrumbs__text" @click = "removeFrom($event)" v-bind:class = "setActiveClass(selections, selection.id)">{{selection.selection}}</span>
                <svg class = "breadcrumbs__arrow" xmlns="http://www.w3.org/2000/svg" width = "15" height = "12" viewBox="0 0 256 512" v-if = "selections.length - 1 === selection.id">
                    <path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path>
                </svg>
            </span>
        </div>
    </div>
</template>


<script>
import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters({
            selections: 'user/selected'
        }),
    },
    methods: {
        /**
         * Set 'active' class on the last element
         */
        setActiveClass(selections, id) {
            return this.selections.length -1 !== id ? 'breadcrumbs__text--active' : '';
        },
        /**
         * Removes clicked element and all following from state
         */
        removeFrom(e) {
            this.$forceUpdate();
            this.$store.commit('user/remove', e.currentTarget.innerHTML);
        }
    }
}
</script>


<style lang="scss">
.breadcrumbs {
    display: flex;
    flex-direction: column;
    &__subtitle {
        font-size: 1.3rem;
        color: #ccc;
        font-weight: 600;
    }
    &__row {
        display: flex;
        flex-direction: row;
    }
    &__link {
        color: white;
        font-size: 1.8rem;
        font-weight: 600;
    }
    &__text {
        cursor: pointer;
        text-decoration: underline;
        &--active {
            color: var(--color-primary);
        }
    }
    &__arrow {
        & path {
            fill: white;
        }
    }
}
</style>
