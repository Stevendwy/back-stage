<template>
  <div class="login">
      <div class="ls-title">洋哥逗着玩</div>
      <div class="ls-login">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
              <el-form-item prop="username">
                  <el-input v-model="ruleForm.username" placeholder="username"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                  <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
              </el-form-item>
              <div class="login-btn">
                  <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              </div>
          </el-form>
      </div>
  </div>
</template>

<script>
  export default {
      data () {
          return {
              ruleForm: {
                  username: '',
                  password: ''
              },
              rules: {
                  username: [{required: true, message: '请输入用户名' , trigger: 'blur'}],
                  password: [{required: true, message: '请输入密码', trigger: 'blur'}]
              }
          }
      },
      methods: {
          submitForm (formName) {
              let self = this
              self.$refs[formName].validate((valid) => {
                  if (valid) {
                      localStorage.setItem('ov_username', self.ruleForm.username)
                      self.$router.push('/7.1')
                  }else {
                      return false
                  }
              })
          }
      }
  }
</script>

<style lang="less" scoped>
    .login{
        position: relative;
        width:100vw;
        height:100vh;
        background-color: black;
        .ls-title{
           position: absolute;
            top:50%;
            width:100%;
            margin-top: -230px;
            text-align: center;
            font-size:30px;
            color: #fff; 
        }
        .ls-login{
            position: absolute;
            left:50%;
            top:50%;
            width:300px;
            height:160px;
            margin:-150px 0 0 -190px;
            padding:40px;
            border-radius: 5px;
            background: #fff;
            .login-btn{
             text-align: center; 
                button{
                    width:100%;
                    height:36px;  
                }  
            }            
        }
    }
</style>

