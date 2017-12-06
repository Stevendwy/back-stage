<template>
  <div class="buyer-container">
    <div class="title-container">
      <div class="title">
        <span class="t-name" v-once>测试版本</span>
        <span class="t-company">随意显示</span>
        <span class="t-address" v-once
          @click="address">收货地址</span>
      </div>
    </div>
    <div class="buyer">
      <b-menu />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import bMenu from './menu/menu.vue'

// import {
//   Menu,
//   Submenu,
//   MenuItem
// } from 'element-ui'

// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)

export default {
  components: {
    bMenu
  },
//   mounted() {
//     this.aUserInfo()
//   },
//   computed: {
//     ...Vuex.mapState('buyer', ['userInfo'])
//   },
  methods: {
    // ...Vuex.mapActions('buyer', ['aUserInfo']),
    address() {
      this.$message('此功能暂未开通...')
    }
  }
}
</script>

<style scoped lang="less">
.buyer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: e('calc(100% - 32px)');
  width: 100%;

  .title-container {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.24);
    border-radius: 2px;
    z-index: 2;

    .title {
      position: relative;
      display: flex;
      align-items: center;
      width: 1024px;
      height: 60px;

      .t-name {
        font-size: 20px;
        color: #EC6337;
        margin: 0 50px 0 20px;
      }

      .t-company {
        font-size: 14px;
        color: #333;
      }

      .t-address {
        font-size: 12px;
        color: #999;
        margin-left: 40px;
        cursor: not-allowed;
      }
    }
  }

  .buyer {
    display: flex;
    width: 100%;
    height: e('calc(100% - 60px)');
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
</style>