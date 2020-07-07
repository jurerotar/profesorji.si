import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export function createStore() {
    return new Vuex.Store({
        // IMPORTANT: state must be a function so the module can be
        // instantiated multiple times
        state: () => ({
            token: localStorage.getItem('access_token') || 'burek',
            status: ''
        }),

        actions: {

        },
        getters: {
            isAuthenticated: state => !!state.token,
            hasStatus: state => state.status
        },

        mutations: {

        }
    })
}
