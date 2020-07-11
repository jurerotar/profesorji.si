<template>
    <div >
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters({
            width: 'user/width'
        }),
    },
}
</script>


<style lang="scss">

</style>
