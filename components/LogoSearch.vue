<template>
    <div class = "logoSearchContainer">
        <Logo />
        <Search />
    </div>
</template>


<style lang="scss">
.logoSearchContainer {
    position: fixed;
    top: 0;
    left: 0;
    background-color: blue;
    &[data-position="onSide"] {
        display: none;
    }
    @media only screen and (max-width: var(--tablet-width)) {
    &[data-position="onTop"] {
        display: none;
    }
    }
}
</style>
