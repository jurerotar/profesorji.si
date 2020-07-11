<template>
  <div>
    <nav class="sidebar" :data-open="sidebarExtended ? open : closed">
        <LogoSearch v-if="width < tabletWidth" />
        <Navigation />
        <BottomLinks />
    </nav>
    <div v-if="width < tabletWidth" class="sidebarCloser" v-on:click="toggle"></div>
  </div>
</template>


<script>
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
            open: 'open',
            closed: 'closed'
        }
    },
    computed: {
        ...mapGetters({
            sidebarExtended: 'user/sidebarExtended',
            tabletWidth: 'constants/tablet',
            width: 'user/width'
        }),
    },
    methods: {
        toggle() {
            this.$store.commit('user/toggleSidebar');
        }
    }
}
</script>

<style lang = "scss">
@import "~/assets/scss/_variables.scss";
.sidebar {
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	width: 320px;
	position: fixed;
	padding: 1rem 1rem 1rem 1rem;
	left: 0;
	top: 6rem;
	z-index: 5;
	height: calc(100% - 6rem);
	background-color: var(--sidebar-background-color);
	transition: transform var(--transition-duration-primary);
	@media screen and (max-width: $wideScreen) {
		padding: 9rem 1rem 1rem 1rem;
		transform: translateX(-100%);
		&[data-open='open'] {
			transform: translateX(0);
		}
	}
	@media screen and (max-width: $mobileWide) {
		width: 80%;
	}
}
.sidebarCloser {
	position: fixed;
	top: 6rem;
	right: 0;
	height: calc(100% - 6rem);
	z-index: 5;
	filter: blur(0.5px);
	@media screen and (max-width: $tablet) {
		width: calc(100% - 320px);
		transform: translateX(100%);
		&[data-open='open'] {
			transform: translateX(0);
		}
	}
	@media screen and (max-width: $mobileWide) {
		width: 20%;
	}
}
.sidebar[data-open='open'] ~ .sidebarCloser {
	@media screen and (max-width: $tablet) {
		transform: translateX(0);
	}
}
</style>
