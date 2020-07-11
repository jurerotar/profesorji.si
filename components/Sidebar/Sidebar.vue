<template>
  <div>
    <nav class="sidebar" :data-open="sidebarExtended ? open : closed">
        <div class = "sidebar__logoSearch" v-if="width < wideScreenWidth">
			<Logo v-if = "width > mobileWideWidth" />
			<Search />
		</div>
		<div v-if = "isAuthenticated" class = "sidebar__userPreferences">

		</div>
		<div v-else class = "sidebar__login">
			<h3 class = "sidebar__loginTitle">Prijava</h3>
			<p class = "sidebar__loginText">Prijavljeni uporabniki imajo možnost komentiranja, podajanja ocen, všečkanja komentarjev, nagrajevanje uporabnikov in mnogo več!</p>
			<LoginButton :class = "'loginButton--sidebar'" />
		</div>
        <Navigation />
        <SidebarLinks />
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
	props: ['loginButton--sidebar']
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
	top: 6rem;
	right: 0;
	height: calc(100% - 6rem);
	z-index: 5;
	filter: blur(0.5px);
	@media screen and (max-width: $tabletWidth) {
		width: calc(100% - 320px);
		transform: translateX(100%);
		&[data-open='open'] {
			transform: translateX(0);
		}
	}
	@media screen and (max-width: $mobileWideWidth) {
		width: 20%;
	}
}
.sidebar[data-open='open'] ~ .sidebarCloser {
	@media screen and (max-width: $tabletWidth) {
		transform: translateX(0);
	}
}
</style>
