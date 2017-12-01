<template>
    <div class="changepassword">
        <a-nav :titles="titles" :hidsearch="hidsearch" @search="search"></a-nav>
        <a-filter :btnlist="btnlist" 
                  :btnindex="btnindex" 
                  @btnClick="btnClick"></a-filter>
    </div>
</template>

<script>
    import aNav from './anav.vue'
    import aFilter from './afilter.vue'
    export default {
        data (){
            return {
                titles: "1.1 第三方接口",
                btnlist:['添加用户','全部','支付','未支付'],
                btnindex: 0,
                hidsearch:true
            }
        },
        methods: {
            btnClick (index) {
                this.btnindex = index
            },
            search (value) {
                console.log(value)
            }
        },
        components: {
            'aNav': aNav,
            'aFilter': aFilter
        }
    }

</script>

<style lang="less">
.changepassword{
    width: 100%;
}
</style>
