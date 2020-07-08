<template>
    <nav class = "topbar">
        <LogoSearch data-position = "onTop" />
        <TopbarLinks />
        <div class = "topbar__userPanel">
        </div>
    </nav>
</template>


<script>

export default {
    props: ['data-position']
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
    background-color: var(--topbar-background-color);
    border: 1px solid blue;
    padding: 0 2rem;
    &__first {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        border: 1px solid blue;
    }
    &__userPanel {
        position: fixed;
        top: 0;
        right: 0;
        border: 1px solid blue;
    }
}
</style>
