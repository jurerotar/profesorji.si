<template>
  <div>
    <nav class="sidebar" :data-open="sidebarExtended ? open : closed">
		<slot />
    </nav>
    <div v-if="width < wideScreenWidth" class="sidebarCloser" v-on:click="toggle"></div>
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
            wideScreenWidth: 'constants/wideScreen',
			mobileWideWidth: 'constants/mobileWide',
            width: 'user/width',
			isAuthenticated: 'user/isAuthenticated'
        }),
    },
    methods: {
        toggle() {
            this.$store.commit('user/toggleSidebar');
        }
    },
}
</script>

<style lang = "scss">
@import "~/assets/scss/_variables.scss";
.sidebar {
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	width: calc(var(--sidebar-width) - 1rem);
	position: fixed;
	padding: 1rem;
	left: 0;
	top: var(--topbar-height);
	z-index: 5;
	height: calc(100% - var(--topbar-height));
	background-color: var(--sidebar-background-color);
	transition: transform var(--transition-duration-primary);
	@media screen and (max-width: $wideScreenWidth) {
		transform: translateX(-100%);
		&[data-open='open'] {
			transform: translateX(0);
		}
	}
	@media screen and (max-width: $mobileWideWidth) {
		width: 80%;
	}
	&::-webkit-scrollbar {
		width: 5px;
		border-right: 1px solid #ccc;
	}
	&::-webkit-scrollbar-thumb {
		background: var(--color-primary);
	}
	&__logoSearch {
		display: flex;
		flex-direction: row;
	}
	&__login {
		border-bottom: 1px solid #ccc;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 1.5rem;
        @media screen and (max-width: $tabletWidth) {
            margin: 1.5rem 0;
        }
	}
	&__loginText {
		color: white;
		font-size: 1.4rem;
	}
	&__loginTitle {
		font-size: 2rem;
		width: 100%;
		color: white;
	}
}
.sidebarCloser {
	position: fixed;
	top: var(--topbar-height);
	right: 0;
	height: calc(100% - var(--topbar-height));
	z-index: 5;
	width: calc(100% - var(--sidebar-width));
	@media screen and (max-width: $mobileWideWidth) {
		width: 20%;
	}
}
.sidebar[data-open='open'] ~ .sidebarCloser {
	@media screen and (max-width: $wideScreenWidth) {
		transform: translateX(0);
	}
}
</style>
