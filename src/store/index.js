import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // this.$store对象

import echart from './echart'

// const state = {
//   charts: [],  //图标数据
//   color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769'],
// }

export default new Vuex.Store({
  modules: {
    // event,
    // theme,
    echart
  }
})

// export default new Vuex.Store({
//   state, // 状态 存放
//   mutations, // 修改、改变、切换、下一个改变的定义
//   getters,
//   actions // 动作，组件不能直接改变state，改变谁？
// })
