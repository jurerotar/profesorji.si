<template>
    <ul class = "topbar__links">
        <li class="topbar__link" :class="{'active' : currentPage === '/'}" data-title = "Domov">
            <nuxt-link to = "">
                <svg class="topbar__logo" viewBox="0 0 28 28" height="28" width="28">
                    <path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"/>
                </svg>
            </nuxt-link>
        </li>
        <li class="topbar__link" :class="{'active' : currentPage === '/nagrajeno'}" data-title = "Najbolj nagrajeno">
            <nuxt-link to = "/nagrajeno">
                <svg class="topbar__logo" height="28" width="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M259.69042,85.96457l49.64549,20.69969,20.70353,49.643a6.65746,6.65746,0,0,0,11.926,0L362.667,106.66426l49.64549-20.69969a6.66574,6.66574,0,0,0,0-11.92493L362.667,53.338,341.96545,3.697a6.65746,6.65746,0,0,0-11.926,0L309.33591,53.338,259.69042,74.03964a6.66574,6.66574,0,0,0,0,11.92493ZM364.294,267.29343,259.4951,251.99764l-46.90716-95.19633c-8.39078-16.99879-32.68813-17.2019-41.18829,0l-46.90716,95.19633L19.69358,267.29343C.89634,269.99636-6.71318,293.19783,6.99021,306.49376l75.90772,73.99472L64.89758,485.07476c-3.20319,18.9049,16.68782,33.107,33.29752,24.2014l93.7987-49.3871,93.79869,49.3871A22.95361,22.95361,0,0,0,319.09,485.07476L301.199,380.48848l75.89209-73.99472C390.70077,293.19783,383.09125,269.99636,364.294,267.29343ZM509.05268,219.2285,469.339,202.67109,452.7801,162.961a5.32691,5.32691,0,0,0-9.5412,0L426.678,202.67109l-39.7117,16.55741a5.33385,5.33385,0,0,0,0,9.54033L426.678,245.3282l16.56087,39.7081a5.32534,5.32534,0,0,0,9.5412,0L469.339,245.3282l39.71366-16.55937a5.33386,5.33386,0,0,0,0-9.54033Z"></path>
                </svg>
            </nuxt-link>
        </li>
        <li class="topbar__link" :class="{'active' : currentPage === '/vseckano'}" data-title = "Najbolj všečkano">
            <nuxt-link to = "/vseckano">
                <svg class="topbar__logo" height="28" width="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M272 480h-96c-13.3 0-24-10.7-24-24V256H48.2c-21.4 0-32.1-25.8-17-41L207 39c9.4-9.4 24.6-9.4 34 0l175.8 176c15.1 15.1 4.4 41-17 41H296v200c0 13.3-10.7 24-24 24z"></path>
                </svg>
            </nuxt-link>
        </li>
        <li class="topbar__link" :class="{'active' : currentPage === '/novo'}" data-title = "Najnovejše">
            <nuxt-link to = "/novo">
                <svg class="topbar__logo" height="28" width="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"></path>
                </svg>
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            currentPage: this.$route.path
        }
    },
}
</script>

<style lang="scss">
.topbar {
    &__links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    &__link {
        padding: 0.75rem 2.5rem;
        transition: background-color var(--transition-duration-primary);
        cursor: pointer;
        border-radius: var(--border-radius-primary);
        margin: 0 .5rem;
        position: relative;
        &::before {
            content: attr(data-title);
            position: absolute;
            top: calc(100% + 10px);
            left: 50%;
            background-color: white;
            display: flex;
            pointer-events: none;
            opacity: 0;
            transition: opacity var(--transition-duration-primary) ease-out 0;
            transform: translateX(-50%);
            padding: .5rem 1rem;
            border-radius: var(--border-radius-primary);
            font-size: 1.2rem;
            font-weight: 400;
            white-space: nowrap;
        }
        &:hover {
            background-color: var(--topbar-background-hover-color);
            &::before {
                opacity: .8;
                transition: opacity var(--transition-duration-primary) ease-out 1s;
            }
        }
        &.active {
            background-color: var(--topbar-background-hover-color);
        }
    }
    &__logo {
        & path {
            fill: var(--primary-color);
        }
    }
}
</style>
