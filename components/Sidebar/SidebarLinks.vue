<template>
    <ul class = "bottomLinks">
        <li class="bottomLinks__item">
            <nuxt-link to = "/zasebnost" class = "bottomLinks__link">Politika zasebnosti</nuxt-link>
        </li>
        <li class="bottomLinks__item">
            <nuxt-link to = "/pogoji-uporabe" class = "bottomLinks__link">Pogoji uporabe</nuxt-link>
        </li>
        <li class="bottomLinks__item">
            <nuxt-link to = "/oglasevanje" class = "bottomLinks__link">Oglaševanje z nami</nuxt-link>
        </li>
        <li class="bottomLinks__item">
            <nuxt-link to = "/piskotki" class = "bottomLinks__link">Uporaba piškotkov</nuxt-link>
        </li>
        <li class="bottomLinks__item">
            <nuxt-link to = "/prijavi-napako" class = "bottomLinks__link">Prijavi napako</nuxt-link>
        </li>
        <li class="bottomLinks__item">
            <nuxt-link to = "/kontakt" class = "bottomLinks__link">Zahtevaj umik</nuxt-link>
        </li>
        <li class="bottomLinks__item">
            <nuxt-link to = "/kontakt" class = "bottomLinks__link">Kontakt</nuxt-link>
        </li>
        <li class="bottomLinks__item">
            <p class = "bottomLinks__link break">Vsebino strani prispevajo uporabniki in ni nujno delo avtorjev strani. Avtorji strani za objave ne odgovarjajo. <br>Vse pravice pridržane, {{appName}} © {{currentYear}}</p>
        </li>
    </ul>

</template>
<script>
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
            currentYear: new Date().getFullYear()
        }
    },
    computed: {
        ...mapGetters({
            appName: 'constants/name'
        }),
    },
}
</script>
<style lang = "scss">
@import "~/assets/scss/_variables.scss";

.bottomLinks {
    display: flex;
    flex-wrap: wrap;
    &__link {
        white-space: nowrap;
        max-width: 100%;
        color: var( --sidebar-link-color);
        font-size: 1.3rem;
        display: inline-flex;
        margin: 3px 10px 3px 0;
        font-weight: 600;
        transition: color var(--transition-duration-primary);
        position: relative;
        &:hover {
            color: gray;
        }
        &::after {
            content: "\2022";
            position: absolute;
            right: -7px;
            top: 50%;
            transform: translateY(-50%);
        }
        &.break {
            margin-top: 1.5rem;
            font-weight: 400;
            white-space: normal;
            &:hover {
                color: var(--sidebar-link-color);
            }
            &::after {
                display: none;
            }
        }
    }
}
</style>
