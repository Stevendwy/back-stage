import * as types from './mutation_types'

export default {
  [types.CHARTS_PUSH] (state, obj) {
    state.charts.push(obj)
  }
}
