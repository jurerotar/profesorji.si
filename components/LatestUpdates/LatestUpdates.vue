<template>
    <nav class = "latestUpdates">
    </nav>
</template>


<script>
export default {

}
</script>

<style lang = "scss">
.latestUpdates {
    display: flex;
    flex-direction: column;
    width: 25vw;
    max-width: 320px;
    position: fixed;
    right: 0;
    top: 6rem;
    height: calc(100% - 6rem);
    background-color: var(--sidebar-background-color);
    border: 1px solid blue;
}
</style>
