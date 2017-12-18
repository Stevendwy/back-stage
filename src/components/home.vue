<template>
  <div class="home">
      <v-header></v-header>
      <v-sidebar :is-show="getShowbar"></v-sidebar>
      <div class="content">
          <transition name="move" mode="out-in">
              <router-view></router-view>
          </transition>
      </div>
  </div>
</template>

<script>
  import vHeader from './page/head.vue'
  import vSidebar from './page/sidebar.vue'
  export default {
      data(){
          return {

          }
      },
      components: {
          'vHeader': vHeader,
          'vSidebar': vSidebar
      },
      computed: {
          getShowbar(){
              return this.$store.getters.getShowbar
          }
        }
  }
</script>

<style lang="less">
    .home{
        background-color: #1E90FF;
        display: flex;
        flex-wrap: wrap;
        .content{
            display: inline-flex;
            width: e('calc(100% - 200px)');
            background-color: #f2f2f2;
            min-height: 100vh;
            margin: 0 auto;
            position: relative;
        }
    }
</style>

