<template>
    <main class = "main">
        <slot />
    </main>
</template>


<style lang="scss">
@import "~/assets/scss/_variables.scss";

.main {
    display: flex;
    flex-direction: column;
    max-width: var(--main-width);
    width: 100%;
    margin-top: calc(var(--topbar-height) + 1rem);
    padding: 1rem;
    justify-content: center;
    @media screen and (max-width: $wideScreenWidth) {
        margin-left: calc((100% - var(--sidebar-width) - var(--main-width)) / 2);
	}
    @media screen and (max-width: $tabletWidth) {
		width: 100%;
        margin-left: unset;
	}
    /**
    Used in singleline layout
     */
    &.singleLine {
        @media screen and (max-width: $wideScreenWidth) {
            margin: var(--topbar-height) auto 0 auto;
	    }
    }
}
</style>
