<template>
    <div class="baseform">
        <div class="form-box">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="表单名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="选择器">
                    <el-select v-model="form.region" placeholder="请选择">
                        <el-option key="alibaba" label="阿里巴巴" value="alibaba"></el-option>
                        <el-option key="jd" label="京东" value="jd"></el-option>
                        <el-option key="bd" label="百度" value="bd"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="日期时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="选择开关">
                    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="多选框">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="阿里巴巴" name="type"></el-checkbox>
                        <el-checkbox label="京东" name="type"></el-checkbox>
                        <el-checkbox label="天猫" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="单选框">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="阿里巴巴"></el-radio>
                        <el-radio label="京东"></el-radio>
                        <el-radio label="天猫"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="文本框">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: ['阿里巴巴'],
                    resource: '阿里巴巴',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log(this.form)
                this.$message.success('提交成功！');
            }
        }
    }
</script>
<style>
    .baseform{
        padding: 20px;
    }
</style>