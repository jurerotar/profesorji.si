<template>
    <div class = "logoContainer">
        <nuxt-link to = "/admin">
                <span class = "logoContainer__logoTitle">p</span>
        </nuxt-link>
    </div>
</template>

<style lang = "scss">
.logoContainer {
    --size: 5rem;
    height: var(--size);
    width: var(--size);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: .5rem;
    background: rgb(3,106,227);
    background: linear-gradient(0deg, rgba(3,106,227,1) 35%, rgba(23,169,253,1) 100%);
    &__logoTitle {
        display: flex;
        align-content: center;
        font-family: 'Ubuntu';
        font-size: 3rem;
        border-radius: 50%;
        color: white;
    }
}
</style>
