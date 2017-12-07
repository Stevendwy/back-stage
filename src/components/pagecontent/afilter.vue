<template>
  <div class="afilter">
      <el-button size="medium" 
            v-for="(item,index) in btnlist" 
            :class="btnindex == index ? 'btnactive' : ''"
            @click="btnClick(index)"
            :key="index">{{item}}</el-button>
  </div>
</template>

<script>
  export default {
      props: ['btnlist','btnindex'],
      methods: {
        btnClick (index) {
            if (index != this.btnindex) {
              this.$emit('btnClick',index)  
            } 
        }
    },
      data (){
          return {

          }
      }
  }

</script>

<style lang="less">
.afilter{
    height: 52px;
    display: flex;
    align-items: center;
    button{
        margin-left: 10px;
        padding: 8px 20px;
    }
    .btnactive{
        background-color: #ecf5ff;
        color: #3a8ee6;
        border-color: #3a8ee6;
        outline: 0;
    }
}

</style>