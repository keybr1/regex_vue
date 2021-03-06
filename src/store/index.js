import Vue from 'vue'
import Vuex from 'vuex'

import challenges from '@/data/challenges.js'
import router from '@/router'

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
  mutations: {
    updateCurrentChallenge (state, idx) {
      state.currIdx = idx
    }
  },
  actions: {
    navigateToChallenge ({ commit, state }, idx) {
      if (state.challenges.length >= idx + 1) {
        try {
          if (router.history.current.name !== 'home') {
            router.push({ name: 'home' })
          }
          commit('updateCurrentChallenge', idx)
        } catch (err) {
          console.log(err)
        }
      } else {
        router.push({ name: 'completed' })
      }
    }
  },
  modules: {
  }
})
