import * as types from './mutation_types'

export default {
  [types.CHARTS_PUSH] (state, obj) {
    state.charts.push(obj)
  },
  [types.SHOWSIDEBAR](states, bool) {
      if (bool != "toggle") {
          states.sidebarshow = bool
      }else {
          states.sidebarshow = !states.sidebarshow
      }
      
  }
}
