<template>
    <div>
        <Sidebar />
        <Topbar />
        <RecommendedProfessors />
        <main>
            <Nuxt />
        </main>
    </div>
</template>

<script>

export default {
    mounted() {
        /**
         * Attach resize event listeners
         */
        window.addEventListener('resize', () => {
            this.updateWidth(window.innerWidth);
            this.updateHeight(window.innerHeight);
        });
        /**
         * Get current width & height
         */
        this.updateWidth(window.innerWidth);
        this.updateHeight(window.innerHeight);
    },
    methods: {
        updateWidth(width) {
            this.$store.commit('user/updateWidth', width);
        },
        updateHeight(height) {
            this.$store.commit('user/updateHeight', height);
        }
    }
}
</script>

<style lang="scss">
</style>
