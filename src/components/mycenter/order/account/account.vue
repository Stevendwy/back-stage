<template>
    <div class="account">
        <el-container>
            <el-main>
                <div class="title">交易记录</div>
                <div class="title-second">
                    <span class="title-name">账户余额：</span>
                    <span class="title-money">¥{{money}}</span>
                </div>
                <div class="form-content">
                    <div class="ul">
                        <div class="li" v-for="(item,index) in form_title_list">{{item}}</div>
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
                money:"10,000.00",
                form_title_list:['申请时间', '内容', '订单号|流水号', '对方', '金额|明细', '状态', '完成时间']
            }
        },
        methods: {

        }
    }

</script>

<style lang="less">
.account{
    .el-main{
        .title{

        }

        .title-second{
            font-size: 14px;
            color: #666666;
            margin: 20px 0 12px 0;
            .title-money{
                color: #FF5502;
            }
        }

        .form-content{
            display: flex;
            flex-direction: column;
            .ul{
                display: flex;
                flex-direction: row;
                background: #F6F6F6;
                border: 1px solid #D8D8D8;
                height: 40px;
                width: 784px;
                font-size: 12px;
                color: #666666;
                // align-items: center;
                padding: 0px 10px;
                &>.li:nth-child(n+1){
                    min-height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }
                &>.li:nth-child(1){
                    width: 85px;
                }
                &>.li:nth-child(2){
                    width: 90px;
                }
                &>.li:nth-child(3){
                    width: 210px;
                }
                &>.li:nth-child(4){
                    width: 144px;
                }
                &>.li:nth-child(5){
                    width: 85px;
                    justify-content: flex-end;
                }
                &>.li:nth-child(6){
                    width: 72px;
                    padding-left: 8px;
                }
                &>.li:nth-child(7){
                    width: 90px;
                }
                
            }
        }
    }

}
</style>
