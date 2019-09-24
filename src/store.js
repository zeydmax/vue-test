import Vue from 'vue'
import Vuex from 'vuex'

import edit from './store/edit/store';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        value: ''
    },
    mutations: {
        changeInput (state, val) {
            state.value = val
        }
    },
    modules: {
        edit
    }
})

export default store;