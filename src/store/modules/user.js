import Vue from 'vue'
import bcrypt from 'bcryptjs'

const state = {
  email: '',
  userId: null,
  isLoggedIn: false,
  loginError: ''
}

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  userId: state => state.userId,
  loginError: state => state.loginError
}

/*
  Actions
*/
const actions = {
  async logInUser ({ commit }, payload) {
    if (payload.email === 'test1@user.com' && payload.password === 'test111') {
      // Simulate getting back a valid userId from API call...
      payload.userId = '5a777f0a75f64a1698221d98'
      commit('logInUser', payload)
    } else {
      commit('loginError')
    }
  }
}

/*
  Mutations
*/
const mutations = {
  logInUser (state, payload) {
    state.isLoggedIn = true
    state.email = payload.email
    state.first = payload.first
    state.last = payload.last
    state.userId = payload.userId
  },
  loginError (state) {
    state.isLoggedIn = false
    state.loginError = 'Email and/or Password are invalid. Login failed.'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
