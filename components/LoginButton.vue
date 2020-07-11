<template>
    <nuxt-link to = "/prijava" class = "loginButton">
        Prijava
    </nuxt-link>
</template>


<style lang="scss">
@import "~/assets/scss/_variables.scss";

.loginButton {
    background-color: var(--color-primary);
    border-radius: var(--border-radius-primary);
    padding: .75rem 2.5rem;
    font-weight: 600;
    font-size: 1.8rem;
    color: white;
    text-align: center;
    max-width: 120px;
    transition: background-color var(--transition-duration-primary);
    &:hover {
        background-color: var(--color-secondary);
    }
    &--topbar {
        @media screen and (max-width: $mobileWideWidth) {
            padding: .5rem 1rem;
            font-size: 1.5rem;
        }
    }
    &--sidebar {
        margin-top: 1rem;
    }
}
</style>
