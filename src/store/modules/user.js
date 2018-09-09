import Vue from 'vue'
import bcrypt from 'bcryptjs'

const state = {
  email: '',
  userId: null,
  first: '',
  last: '',
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
    await Vue.axios.get('/user/email/' + payload.email)
      .then((resp) => {
        let data = resp.data

        if (data && data.length > 0) {
          /*
            Test the payload which is the password entered
            against the user object
          */
          const pwdHash = data[0].password
          if (bcrypt.compareSync(payload.password, pwdHash)) {
            const user = data[0]
            payload.userId = user._id
            payload.first = user.first
            payload.last = user.last
            payload.email = user.email
            commit('logInUser', payload)
          } else {
            commit('loginError')
          }
        }
      })
      .catch(() => {
        commit('loginError')
      })
  },
  async loadUserProfile ({ commit }) {

  },
  updateUserProfile ({ commit }, payload) {

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
