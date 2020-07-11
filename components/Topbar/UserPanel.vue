<template>
    <div class = "userPanel">
        <div :style = "{backgroundColor: color}" class = "userPanel__letterImage"><span class = "userPanel__letter">{{firstLetter}}</span></div>
        <span v-if="width > tabletWidth" class = "userPanel__username">{{username}}</span>
    </div>
</template>


<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters({
            username: 'user/username',
            color: 'user/color',
            firstLetter: 'user/firstLetter',
            tabletWidth: 'constants/tablet',
            width: 'user/width',
        }),
    },
}
</script>


<style lang="scss">
@import "~/assets/scss/_variables.scss";

.userPanel {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: $tablet) {
        position: relative;
    }
    &__letterImage {
        --size: 4rem;
        height: var(--size);
        width: var(--size);
        text-transform: uppercase;
        font-size: 3.2rem;
        color: white;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: attr(data-color color, #000);
        border-radius: 50%;
    }
    &__username {
        font-size: 1.6rem;
        color: white;
        font-weight: 600;
        margin-left: 1rem;
    }
}
</style>
