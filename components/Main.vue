<template>
    <main class = "main">
        <slot />
    </main>
</template>


<style lang="scss">
.main {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin-top: var(--topbar-height);
    padding: 1rem;
}
</style>
