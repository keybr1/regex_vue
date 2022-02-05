import Vue from 'vue'
import Vuex from 'vuex'

import challenges from '@/data/challenges.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currIdx: 1,
    challenges
  },
  getters: {
    currChallenge (state) {
      return state.challenges[state.currIdx]
    }
  },
  getters: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
