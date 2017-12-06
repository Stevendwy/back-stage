<template>
    <div class="withdraw">
        <el-container>
            <el-main>
                <div class="withdraw-position">
                    <div class="title">{{title}}</div>
                    <div v-for="(item,index) in name_list" class="ul">
                        <template v-if="index === 0">
                            <div class="li-name">{{item}}</div>
                            <div class="li-money">￥{{money}}</div>
                        </template>
                        <template v-else-if="index === 1">
                            <div class="li-name">{{item}}</div>
                            <div class="li-data">
                                <input type="text" :placeholder="placeholder_list[index]" :ref="refs_list[index]">
                            </div>
                            <div class="li-bankcard">
                                <h3>已存银行卡</h3>
                            </div>
                        </template>
                        <template v-else-if="index === 5">
                            <div class="li-name">{{item}}</div>
                            <template>
                                <el-radio v-model="radio" label="1">普通（3-5个工作日）</el-radio>
                                <el-radio v-model="radio" label="2">加急（1-2个工作日）</el-radio>
                            </template>
                        </template>
                        <template v-else-if="index === 6">
                            <div class="li-name">{{item}}</div>
                            <div class="li-data">
                                ¥0.00（付款总额{{"￥" + money}}）
                            </div>
                        </template>
                        <template v-else-if="index === 7">
                            <div class="li-name">{{item}}</div>
                            <div class="li-data">
                                <input type="text" :placeholder="placeholder_list[index]" :ref="refs_list[index]">
                            </div>
                            <div class="li-bankcard">
                                <h3>设置提现密码</h3>
                            </div>
                        </template>
                        <template v-else>
                            <div class="li-name">{{item}}</div>
                            <div class="li-data">
                                <input type="text" :placeholder="placeholder_list[index]" :ref="refs_list[index]">
                            </div>
                        </template>
                    </div>
                </div>               
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                title: "申请提现",
                name_list: ['我的可提现金额：', '收款银行：', '收款卡号：', '开户人姓名：', '提现金额：', '到账时间：', '服务费：', '提现密码：'],
                placeholder_list:['', '输入银行', '输入卡号', '输入开户人姓名', '输入提现金额', '', '', '输入提现密码'],
                refs_list: ['', 'whichbank','bankcard', 'username', 'drawmoney', '', '', 'userpassword',],
                money:"10,000.00",
                radio: '1'
            }
        },
        methods: {
            upimg(){
                this.gen_base64();
            },
             $_(id) {
                    return document.getElementById(id);
            },
            gen_base64() {
                let that = this
                var file = that.$_('upload_file').files[0];
                let r = new FileReader()
                r.onload = function(){
                    // that.$_('base64_output').value = r.result;
                    // console.log(r.result)
                    that.$message('图片已经上传')
                }
                r.readAsDataURL(file);    //Base64
            }
        }
    }

</script>

<style lang="less">
.withdraw{
    .withdraw-position{
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        .title{
            font-size: 14px;
            color: #333333;
            font-weight: 900;
        }
        .ul{
            display: flex;
            flex-direction:row;
            justify-content: flex-start;
            margin-top: 10px;
            height: 40px;
            align-items: center;

            .li-name{
                font-size: 14px;
                color: #666666;
                width: 120px;
            }

            .li-rightline{
                border-right: 1px dashed #D8D8D8;
                margin-right:5px;
                padding-right: 5px; 
            }

            .li-data{
                font-size: 14px;
                color: #666666;
                &>input{
                    width: 310px;
                    height: 40px;
                    background: #FFFFFF;
                    border: 1px solid #D8D8D8;
                    border-radius: 4px;
                    padding-left: 10px;
                    font-size: 14px;
                    color: #999999;
                }
            }

            .li-bankcard{
                font-size: 14px;
                color: #EC6337;
                margin-left: 10px;
            }
        }
    }

}
</style>
