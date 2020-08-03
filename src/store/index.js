import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jsondata: {},
    searchResults: [],
    showSearchResults: false,
    loggedin: false,
    cart: 0
  },
  mutations: {
    setJsonData (state, data) {
      state.jsondata = data
    },
    setSearchResults (state, data) {
      state.searchResults = data
    },
    setShowSearchResults (state, data) {
      state.showSearchResults = data
    },
    setLoggedin (state, data) {
      state.loggedin = data
    },
    setCart (state, data) {
      state.cart = parseInt(data)
    }
  },
  actions: {
  },
  modules: {
  }
})
