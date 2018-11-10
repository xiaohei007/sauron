import Vue from 'vue'
import Vuex from 'Vuex'
import getters from './getter'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

    },
    actions,
    mutations,
    getters
})