<template>
   <div class="filter">
       <div class="startTime">
           <span class="timeText">起始时间</span>
           <el-date-picker
            v-model="startTime"
            type="date"
            placeholder="选择日期">
            </el-date-picker>
            <div class="myCalendar"></div>
       </div>
       <div class="endTime">
           <span class="timeText">截止时间</span>
           <el-date-picker
                v-model="endDate"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
            <div class="myCalendar"></div>
       </div>
       <div class="product-wrapper" v-show="showProduct">
           <div class="products">
               <div class="all" @click="selectArr()" v-show="pro_filter_flag">
                   <checkbox :isChecked="selectArr_flag"></checkbox>
                   全选
               </div>
               <div class="pro" @click="showProPane()">
                   产品<i class="arrow"></i>
               </div>
           </div>
           <div class="pro_list" v-show="pro_filter_flag">
               <ul>
                   <li v-for="(pro,index) in pro_list" @click="pro_toggle(pro,index)">
                       <checkbox :isChecked="pro.selected"></checkbox>
                       <span class="name">{{pro.name}}</span>
                   </li>
               </ul>
           </div>
       </div>
   </div>
</template>

<script>
  import checkbox from './checkbox'
  export default {
      props: {
          myChart: {
              type: Object,
              default: {}
          }
      },
      data (){
          return {
            startDate: '2015.12.04',
            endDate: '2016.01.15',
            pro_filter_flag: false,
            selectAll_flag: true,
            pro_list: [],
            option: {},
            resetOption: {}, // 存储最开始的数据,
            preClass: '',
            showProduct: false,
            showTime: false
          }
      },
      mounted(){
          this.init()
      },
      methods: {
          init(){
              this.prevClass = this.$parent.$el.prevClass
              this.option = this.myChart.getOption()
              this.resetOption = this.deepCope(this.myChart.getOption())
              this.initProList()
          },
          initProList(){
              let arr = []
              if (this.prevClass !== 'point') {
                  this.showProduct = true
                  this.option.xAxis[0].data.forEach((pro,index) => {
                      arr.push({
                          name: pro,
                          selected: true
                      })
                  })
                  this.pro_list = arr
              }
          },
            deepCope(obj) {
                let str, newobj;
                str = newobj = obj.constructor === Array ? [] : {}
                if (typeof obj !== 'object') {
                    return
                } else if (window.JSON) {
                    str = JSON.stringify(obj)
                    newobj = JSON.parse(str)
                } else {
                    for (var i in obj) {
                        newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i];                       const element = object[i];                     
                    }  
                }
                return newobj
            }
      }
  }
</script>

<style lang="less">

</style>