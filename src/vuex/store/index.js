import Vue from 'vue'
import Vuex from 'vuex'

import getters from '../getters'
import actions from '../actions'
import mutations from '../mutations'

Vue.use(Vuex)

const state = {
  href:'hello',
  username:'',
  databaselist:[]
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  strict: process.env.NODE_ENV !== 'production'
})
