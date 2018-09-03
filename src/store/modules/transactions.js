const state = {
  months: [
    { name: 'Zero', abrev: 'ZZZ', index: 0 },
    { name: 'January', abrev: 'Jan', index: 1 },
    { name: 'February', abrev: 'Feb', index: 2 },
    { name: 'March', abrev: 'Mar', index: 3 },
    { name: 'April', abrev: 'Apr', index: 4 },
    { name: 'May', abrev: 'May', index: 5 },
    { name: 'June', abrev: 'Jun', index: 6 },
    { name: 'July', abrev: 'Jul', index: 7 },
    { name: 'August', abrev: 'Aug', index: 8 },
    { name: 'September', abrev: 'Sep', index: 9 },
    { name: 'October', abrev: 'October', index: 10 },
    { name: 'November', abrev: 'Nov', index: 11 },
    { name: 'December', abrev: 'Dec', index: 12 }
  ],
  currentMonth: 5,
  currentYear: 2018,
  transactions: [],
  balanceCharges: 0,
  balanceDeposits: 0
}

const getters = {
  transactionsByMonth: state => state.transactions,
  balanceCharges: state => state.balanceCharges,
  balanceDeposits: state => state.balanceCharges
}

const actions = {
  getTransactionsByMonth ({ commit, state, rootState }, payload) {
    commit('transactionsByMonth', [])

    // Todo API Call
  },
  getPreviousMonthsBalances ({ commit, state, rootState }, payload) {
    commit('transactionsByMonth', [])
    // Todo API Call
    commit('balanceCharges', 0)
    commit('balanceDeposits', 0)
  },
  async gotoMonth ({ commit }, increment) {
    commit('gotoMonth', increment)
  },
  async gotoCurrentMonth ({ commit }) {
    commit('gotoCurrentMonth')
  }
}

const mutations = {
  transactionsByMonth (state, data) {
    // Ensure that the array is clear at starting
    state.transactions = []

    if (data && data.length > 0) {
      data.forEach(tx => {
        state.transactions.push(mapTransaction(tx, state))
      })
    }

    console.log('Transactions by month mutated: ', state.transactions)
  },
  balanceCharges (state, data) {
    state.balanceCharges = data
  },
  balanceDeposits (state, data) {
    state.balanceDeposits = data
  },
  gotoMonth (state, increment) {
    let newMonth = state.currentMonth += increment

    if (newMonth > 12) {
      newMonth = 1
      state.currentYear += 1
    } else if (newMonth < 1) {
      newMonth = 12
      state.currentYear -= 1
    }

    state.currentMonth = newMonth
  },
  gotoCurrentMonth (state) {
    let dt = new Date(Date.now());
    state.currentMonth = dt.getUTCMonth() + 1
    state.currentYear = dt.getUTCFullYear()
  }
}

/*
  Helper Functions
*/
function moneyFormatter (amount) {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  return formatter.format(amount)
}

export default {
  state,
  getters,
  actions,
  mutations
}
