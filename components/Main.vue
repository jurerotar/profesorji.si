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
    margin-top: var(--topbar-height);
    padding: 1rem;
    align-items: center;
    border: 1px solid blue;
    @media screen and (max-width: $wideScreenWidth) {
        margin-left: calc((100% - var(--sidebar-width) - var(--main-width)) / 2);
	}
    @media screen and (max-width: $tabletWidth) {
		width: 100%;
        margin-left: unset;
	}
}
</style>
