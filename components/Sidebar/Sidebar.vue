<template>
    <nav class = "sidebar">
        <LogoSearch data-position = "onSide" />
        <BottomLinks />
    </nav>
</template>


<script>
export default {
    props : ['data-position']
}
</script>

<style lang = "scss">
.sidebar {
    display: flex;
    flex-direction: column;
    width: 25vw;
    max-width: 320px;
    position: fixed;
    left: 0;
    top: 6rem;
    height: calc(100% - 6rem);
    background-color: var(--sidebar-background-color);
    border: 1px solid blue;
}
</style>
