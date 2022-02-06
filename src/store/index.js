import Vue from 'vue'
import Vuex from 'vuex'

import challenges from '@/data/challenges.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currIdx: 0,
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
    navigateToChallenge (state, idx) {
      state.currIdx = idx
    },
    nextChallenge (state) {
      state.currIdx += 1
    }
  },
  actions: {
  },
  modules: {
  }
})
