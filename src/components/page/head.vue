<template>
  <div class="head">
      <div class="logo">
          Boss 管理系统
          <el-button type="primary" round @click="toggleBar">目录</el-button>
      </div>
      <div class="user-info">
          <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link">
                  <img src="../../../static/img/img.jpg" class="user-logo" alt="">
                  {{username}}
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="loginout">退出</el-dropdown-item>
              </el-dropdown-menu>
          </el-dropdown>
      </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'steven'
            }
        },
        computed: {
            username(){
                let username = localStorage.getItem('ov_username')
                return username ? username : this.name
            }
        },
        methods: {
            handleCommand (command){
                if (command == 'loginout') {
                    localStorage.removeItem('ov_username')
                    this.$router.push('/')
                }
            },
            toggleBar(){
                this.$store.dispatch('showsidebar', 'toggle')
            }
        }
    }
</script>

<style lang="less" scoped>
    .head{
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .logo{
            float: left;
            width:250px;
            text-align: center;
        }
        .user-info{
            float: right;
            padding-right: 50px;
            font-size: 16px;
            color: #fff;
            .user-logo{
                position: absolute;
                left:0;
                top:15px;
                width:40px;
                height:40px;
                border-radius: 50%;                
            }
            .el-dropdown-link{
                position: relative;
                display: inline-block;
                padding-left: 50px;
                color: #fff;
                cursor: pointer;
                vertical-align: middle;               
            }
        }
    }
</style>

