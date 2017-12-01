<template>
    <div class="changepassword">
        <a-nav :titles="titles" @search="search"></a-nav>
        <div class="changepassword-cont">
            <div class="position">
                <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="手机号"  >
                        <el-input v-model="ruleForm.phone" placeholder="输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码" >
                        <el-input v-model="ruleForm.authcode" class="authcode-width" placeholder="输入验证码"></el-input>
                        <el-button @click.prevent="getcode(ruleForm.phone)">验证码</el-button>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="ruleForm.password" placeholder="输入新密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button  type="primary" class="btn-submitForm" @click="submitForm" >确认修改</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import aNav from './anav.vue'
    export default {
        components: {
            'aNav': aNav
        },
        data (){
            return {
                titles: "7.1修改登录密码",
                ruleForm: {
                    phone: '',
                    authcode: '',
                    password: ''
                }
            }
        },
        methods: {
            search (value) {
                console.log(value)
            },
            getcode(value){
                console.log(value)
                console.log("getcode")
            },
            submitForm() {
                let _value = this.ruleForm
                if (_value.phone.length != 11) {
                    this.$notify({
                        title: '警告',
                        message: '手机号码错误,请修改!',
                        type: 'warning'
                    });
                }else if (_value.authcode.length < 3) {
                    this.$notify({
                        title: '警告',
                        message: '验证码错误,请修改!',
                        type: 'warning'
                    });
                }else if (_value.password.length < 3) {
                    this.$notify({
                        title: '警告',
                        message: '密码至少6位,请修改!',
                        type: 'warning'
                    });
                }else{
                    console.log(_value)
                    this.ruleForm = {
                        phone: '',
                        authcode: '',
                        password: ''
                    }
                }
                
            }
        }
    }

</script>

<style lang="less">
.changepassword{
    width: 100%;
    .position{
        width: 400px;
        height: 250px;
        background-color: white;
        margin: 10% auto;
        padding: 30px 40px 0 0;
        border-radius: 7px;
        .el-form-item__content{
            .authcode-width{
                width: 70%;
            }
            .btn-submitForm{
                width: 80%;
                margin-left: 10%;
            }
        }
    }
}
</style>
