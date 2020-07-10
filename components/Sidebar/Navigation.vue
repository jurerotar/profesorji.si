<template>
    <div>
        <Breadcrumbs v-if = "selections.length > 0"/>
        <div v-for="uni in universities" :key="uni.id">
            {{uni.name}}
        </div>
    </div>
</template>


<script>
import gql from 'graphql-tag';
import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters({
            selections: 'user/selected'
        })
    },
    apollo: {
        universities: gql`query {
            universities {
                id
                name
                short_name
                faculties {
                    id
                    name
                }
            }
        }`
    },
}
</script>
