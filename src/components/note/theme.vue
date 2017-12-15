<template>
  <section class="theme-box" :class="{'theme-box-show': isShow}">
      <div class="theme">
          <div class="theme-title">
              点击切换主题色
          </div>
          <div class="theme-list" @click="switchTheme('blue')">
              <span style="background: #00B0F0"></span>#00B0F0
          </div>
          <div class="theme-list" @click="switchTheme('green')">
              <span style="background: #00D1B2"></span>#00D1B2
          </div>
          <div class="theme-list" @click="switchTheme('orange')">
              <span style="background:#F4B976"></span>#F4B976
          </div>
            <div class="theme-list" @click="switchTheme('pink')">
              <span style="background:#F39894"></span>#F39894
          </div>
            <div class="theme-list" @click="switchTheme('cyan')">
              <span style="background:#26B6BE"></span>#26B6BE
          </div>
      </div>
  </section>
</template>

<script>
    export default {
        data: function (){
            return {}
        },
        props:['isShow'],
        methods: {
            switchTheme(color){
                this.$store.dispatch('switch_theme', color)
            }
        }
    }
</script>

<style lang="less">

    .theme-box{
        position: fixed;
        left:0px;
        top:0;
        bottom:0;
        width:230px;
        padding:100px 20px 30px;
        box-sizing: border-box;
        transform: translateX(-250px);
        transition: transform .3s;
        background: #f8f8f8;
        z-index:9;
        &.theme-box-show{
            transform: translateX(0);
        }
        &::-webkit-scrollbar{
            width:0;
        }
        .theme{
            width: 100%;
            padding: 0 10px;
            max-width: 800px;
            margin: auto;
            box-sizing: border-box;
        }
        .theme-title{
            margin:0 0 20px;
            font-size: 20px;
        }
        .theme-list{
            position: relative;
            width:70px;
            height:36px;
            line-height:36px;
            padding-left: 36px;
            border:1px solid #aaa;
            border-radius: 3px;
            cursor: pointer;
            margin-bottom: 10px;
            background: #fff;
            &.theme-list-active{
                border:1px solid #e94545;
            }
            span{
                position: absolute;
                left:8px;
                top:8px;
                width:20px;
                height:20px;
            }
        }
    }
</style>

