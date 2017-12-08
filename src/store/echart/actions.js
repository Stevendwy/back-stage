import * as types from './mutation_types'
export default {
  charts_push : (({commit} ,param) => {
    commit(types.CHARTS_PUSH,param)
  })
}
