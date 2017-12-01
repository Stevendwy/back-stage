<template>
  <div class="anav">
      <div class="gettitle">{{titles}}</div>
      <div class="anav-input" :class="hidsearch ? '':'hidden'">
          <el-input placeholder="请输入搜索手机号" v-model="inputvalue">
            
          </el-input>
          <el-button icon="el-icon-search" @click="backValue(inputvalue)"></el-button>
      </div>
  </div>
</template>

<script>
    export default {
        props: ['titles','hidsearch'],
        data (){
            return {
                inputvalue: ""
            }
        },
        methods: {
            backValue(value){
                let _value = value.trim()
                if (_value.length > 3) {
                    this.$emit('search',_value)
                    this.inputvalue = ""
                }
            }
        }
    }

</script>

<style lang="less">
.anav{
    display: flex;
    width: 100%;
    align-items: center;
    height: 44px;
    background-color: white;
    .gettitle{
        margin-left: 10px;
        font-size: 20px;
        color: #333;
        margin-right: 100px;
    }
    .anav-input{
        display: flex;
        height: 32px;
        *.el-input__inner{
            height: 32px;
        }
        *.el-button{
            padding: 8px 20px;
        }
    }
    .hidden{
        display: none;
    }
}
</style>

