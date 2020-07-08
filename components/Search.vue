<template>
    <input class = "search" placeholder = "Išči po profesorjih, predmetih,..." id = "topbarSearch">
</template>

<script>
export default {

}
</script>

<style lang="scss">
.search {
    margin-left: 1rem;
    height: var(--search-bar-height);
    width: var(--search-bar-width);
    border: none;
    border-radius: 50px;
    outline: none;
    padding: 1rem;
    background-color: var(--search-bar-background-color);
    color: var(--search-bar-color);
    &::placeholder {
        color: var(--search-bar-color);
    }
    @media screen and (max-width: 768px) {
		margin-left: 0;
        margin-top: .5rem;
        width: 100%;
	}
}
</style>
