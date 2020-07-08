<template>
    <nav class = "topbar">
        <div class = "topbar_rel">
            <LogoSearch v-if = "width >= 768" />
            <TopbarLinks />
            <div class = "topbar__userPanel">
            </div>
        </div>
    </nav>
</template>


<script>
export default {
    computed: {
        width() {
            return this.$store.state.width.wWidth;
        }
    }
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
    padding: 0 2rem;
    &__rel {
        width: 100%;
        height: 100%;
        position: relative;
    }
    &__userPanel {
        position: fixed;
        top: 0;
        right: 0;
        border: 1px solid blue;
    }
}
</style>
