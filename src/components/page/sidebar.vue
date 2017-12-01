<template>
  <div class="sidebar">
      <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
        <template v-for="item in data">
          <template v-if="item.subgroup">
            <el-submenu :index="'' + item.index">
              <template slot="title">
                {{item.index}}.{{item.name}}
              </template>
              <el-menu-item v-for="(subItem, i) in item.subgroup" :key="i" :index="subItem.code">{{subItem.code}}.{{subItem.name}}</el-menu-item>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="'' + item.index">
              {{item.index}}.{{item.name}}
            </el-menu-item>
          </template>
        </template>
      </el-menu>
  </div>
</template>

<script>
  export default {
    data (){
      return {
          data: [
              {
                  "index": 1, 
                  "name": "监控控制", 
                  "subgroup": [
                      {
                          "code": "1.1", 
                          "name": "第三方接口"
                      }
                  ]
              }, 
              {
                  "index": 2, 
                  "name": "数据统计", 
                  "subgroup": [
                      {
                          "code": "2.1", 
                          "name": "运营数据"
                      }, 
                      {
                          "code": "2.2", 
                          "name": "品牌查询量"
                      }, 
                      {
                          "code": "2.3", 
                          "name": "查询错误"
                      }
                  ]
              }, 
              {
                  "index": 3, 
                  "name": "用户管理", 
                  "subgroup": [
                      {
                          "code": "3.1", 
                          "name": "开通账户"
                      }, 
                      {
                          "code": "3.2", 
                          "name": "用户管理"
                      }
                  ]
              }, 
              {
                  "index": 4, 
                  "name": "支付管理", 
                  "subgroup": [
                      {
                          "code": "4.1", 
                          "name": "支付"
                      }, 
                      {
                          "code": "4.2", 
                          "name": "销售团队明细"
                      }, 
                      {
                          "code": "4.3", 
                          "name": "现金记录"
                      }
                  ]
              }, 
              {
                  "index": 5, 
                  "name": "运营管理", 
                  "subgroup": [
                      {
                          "code": "5.1", 
                          "name": "用户反馈"
                      }, 
                      {
                          "code": "5.3", 
                          "name": "品牌数据"
                      }, 
                      {
                          "code": "5.4", 
                          "name": "品牌上下线"
                      }, 
                      {
                          "code": "5.5", 
                          "name": "群发消息"
                      }, 
                      {
                          "code": "5.6", 
                          "name": "零件别称"
                      }
                  ]
              }, 
              {
                  "index": 6, 
                  "name": "系统管理", 
                  "subgroup": [
                      {
                          "code": "6.1", 
                          "name": "操作管理"
                      }
                  ]
              }, 
              {
                  "index": 7, 
                  "name": "设置", 
                  "subgroup": [
                      {
                          "code": "7.1", 
                          "name": "修改登录密码"
                      }, 
                      {
                          "code": "7.2", 
                          "name": "退出"
                      }
                  ]
              }
          ]
      }
    },
    computed: {
      onRoutes() {
        //退出处理
        let data = this.$route.path == "/7.2" ? this.$router.push('/') : this.$route.path.replace('/','')
        return data
      }
    }
  }
</script>

<style lang="less">
 .sidebar{
    display: inline-flex;
    width: 200px;
    background: #fff;
    min-height: 100vh;
      &>ul{
        height:100%;
      }
      &>*.el-menu{
          border-right: transparent;
          width: 100%;
          background-color: #d8d8d8;
          box-shadow: 2px 0 8px 0 rgba(0,0,0,0.4);
      }
 }
</style>





    