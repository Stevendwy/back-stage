import u from "../../utils/utils";

export default {
  namespaced: true,
  state: {
    menuIndex: '0-0',
    orders: [],
    detailOrdersData: {},
    summary: {}, // 摘要数量
    userInfo: {}
  },
  mutations: {
    updateOrders(state, payload) {
      state.orders = payload.orders
    },
    updateDO(state, payload) {
      state.detailOrdersData = payload.detailOrdersData
    },
    updateSummary(state, payload) {
      Vue.set(state.summary, 'all', payload.all)
      Vue.set(state.summary, 'created', payload.created)
      Vue.set(state.summary, 'paid', payload.paid)
      Vue.set(state.summary, 'sent', payload.sent)
      Vue.set(state.summary, 'received', payload.received)
      Vue.set(state.summary, 'closed', payload.closed)
    },
    updateUI(state, payload) {
      Vue.set(state.userInfo, 'company', payload.company)
    },
    updateMI(state, payload) {
      state.menuIndex = payload.index
    }
  },
  actions: {
    aUserInfo(ct, payload) {
      u.get("/community/user/profile")
        .then(res => {
          ct.commit('updateUI', {company: res.company})
        })
    },
    aList(ct, payload) {
      ct.commit('updateOrders', {orders: []}) // 先清空

      let obj = {
        page: payload.page,
        status: payload.status
      }
      return (
        u.get("/community/order/list", obj)
          .then(res => {
            ct.commit('updateOrders', {orders: res.data})
            return res
          })
      )
    },
    aDetail(ct, payload) {
      return (
        u.get('/community/order/detail', {order_id: payload.order_id})
          .then(res => {
            ct.commit('updateDO', {detailOrdersData: res})
          })
      )
    },
    aSummary(ct) {
      return (
        u.get('/community/order/summary')
          .then(res => {
            ct.commit('updateSummary', res.data)
          })
      )
    },
    handleOrder(ct, payload) {
      let obj = {
        order_id: payload.order_id,
        action: payload.action
      }
      return (
        u.post('/community/order/edit', obj)
          .then(res => {
            ct.dispatch('aList', {page: 1, status: payload.status})
            ct.dispatch('aSummary')
          })
      )
    }
  }
}