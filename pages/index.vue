<template>

</template>

<script>
export default {}
</script>

<style>
/* Transitions using the page hook */
page-enter-active, .page-leave-active {
    transition: all .30s ease-out;
}
.page-enter, .page-leave-active {
    opacity: 0;
    transform-origin: 50% 50%;
}

</style>
