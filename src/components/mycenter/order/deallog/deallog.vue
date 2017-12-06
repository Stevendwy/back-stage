<template>
    <div class="deallog">
        <el-container>
            <el-main>
                <div class="deallog-position">
                    <div class="title">{{title}}</div>
                    <div v-for="(item,index) in name_list" class="ul">
                        <template v-if="index === 1 || index === 2">
                            <div class="li-name">{{item}}</div>
                            <div class="li-data li-rightline">{{data_list[index]}}</div>
                            <div class="li-click">{{click_list[index]}}</div>
                        </template>
                        <template v-else-if="index === 7">
                            <div class="li-name">{{item}}</div>
                            <div class="li-data"></div>
                            <div class="li-click">
                                {{click_list[index]}}
                                <input id="upload_file" type="file" class="hid-input" @change="upimg">
                            </div>
                        </template>
                        <template v-else>
                            <div class="li-name">{{item}}</div>
                            <div class="li-data">{{data_list[index]}}</div>
                            <div class="li-click">{{click_list[index]}}</div>
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
                title: "账户管理",
                name_list: ['登录帐号：', '登录密码：', '提现密码：', '用户姓名：', '公司名称：', '所在城市：', '公司类型：', '营业执照：'],
                data_list: ['139****9989', '******', '******', '张三', '杭州小蜜科技有限公司', '浙江省杭州市', '修理厂', '立即上传'],
                click_list: ['','修改登录密码','设置提现密码','','','','','立即上传',]
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
.deallog{
    .deallog-position{
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
            margin-top: 20px;

            .li-name{
                font-size: 14px;
                color: #666666;
                margin-right: 15px;
            }

            .li-rightline{
                border-right: 1px dashed #D8D8D8;
                margin-right:5px;
                padding-right: 5px; 
            }

            .li-data{
                font-size: 14px;
                color: #333333;
            }

            .li-click{
                font-size: 14px;
                color: #EC6337;
                cursor: pointer;
                position: relative;

                .hid-input{
                    opacity: 0;
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 60px;
                    height: 20px;
                    z-index: 2;
                    border: 1px solid;
                    cursor: pointer;
                }
            }
        }
    }

}
</style>
