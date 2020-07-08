<template>
    <div>
        <nav class = "sidebar" data-open = "closed">
            <LogoSearch v-if = "width < 768" />
            <BottomLinks />
        </nav>
        <div v-if = "width < 768" class = "sidebarCloser" v-on:click="openOrClose"></div>
    </div>
</template>


<script>
export default {
    computed: {
        width() {
            return this.$store.state.width.wWidth;
        }
    },
    methods: {
        openOrClose: () => {
            const sidebar = document.querySelector('.sidebar');
            sidebar.setAttribute('data-open', sidebar.getAttribute('data-open') === 'open' ? 'closed' : 'open');
        }
    }
}
</script>

<style lang = "scss">
.sidebar {
    display: flex;
    flex-direction: column;
    width: 25vw;
    max-width: 320px;
    position: fixed;
    padding: 1rem 1rem 1rem 1rem;
    left: 0;
    top: 6rem;
    z-index: 5;
    height: calc(100% - 6rem);
    background-color: var(--sidebar-background-color);
    transition: transform var(--transition-duration-primary);
    @media screen and (max-width: 768px) {
        padding: 9rem 1rem 1rem 1rem;
		width: 320px;
        transform: translateX(-100%);
        &[data-open="open"] {
            transform: translateX(0);
        }
	}
    @media screen and (max-width: 400px) {
		width: 80%;
	}
}
.sidebarCloser {
    position: fixed;
    top: 6rem;
    right: 0;
    height: calc(100% - 6rem);
    z-index: 5;
    filter: blur(.5px);
    @media screen and (max-width: 768px) {
		width: calc(100% - 320px);
        transform: translateX(100%);
        &[data-open="open"] {
            transform: translateX(0);
        }
	}
    @media screen and (max-width: 400px) {
		width: 20%;
	}
}
.sidebar[data-open="open"] ~ .sidebarCloser {
    @media screen and (max-width: 768px) {
        transform: translateX(0);
    }
}
</style>
