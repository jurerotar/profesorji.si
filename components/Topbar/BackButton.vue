<template>
    <button @click = "back" class = "buttonBack">
        <svg class = "buttonBack__icon" width = "25" height = "20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
        </svg>
    </button>
</template>


<script>
export default {
    methods: {
        back() {
            this.$router.back();
        }
    }
}
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";

.buttonBack {
    display: flex;
    border: none;
    background-color: var(--topbar-background-color);
    padding: .75rem 2.5rem;
    position: absolute;
    left: 0;
    height: calc(var(--topbar-height) - 1.2rem);
    align-items: center;
    cursor: pointer;
    transition: background-color var(--transition-duration-primary);
    border-radius: var(--border-radius-primary);
    &:hover {
        background-color: var(--topbar-background-hover-color);
    }
    @media screen and (max-width: $tabletWidth) {
        padding: .5rem 1rem;
        position: relative;
    }
    &__icon {
        & path {
            fill: var(--color-primary);
        }
    }
}
</style>
