import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['@/components/login'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/home'], resolve),
      children:[
        {
          path: '/',
          component: resolve => require(['@/components/pagecontent/Changepassword.vue'], resolve)
        },{
          path: '/1.1',
          component: resolve => require(['@/components/echarts/dashboard.vue'], resolve)
        },{
          path: '/1.2',
          component: resolve => require(['@/components/echarts/ordinary.vue'], resolve)
        },{
          path: '/2.1',
          component: resolve => require(['@/components/element/baseform.vue'], resolve)
        },{
          path: '/2.2',
          component: resolve => require(['@/components/element/draglist.vue'], resolve)
        },{
          path: '/3.1',
          component: resolve => require(['@/components/note/index.vue'], resolve)
        },{
          path: '/3.2',
          component: resolve => require(['@/components/pagecontent/Thirdapi.vue'], resolve)
        },{
          path: '/4.1',
          component: resolve => require(['@/components/pagecontent/Thirdapi.vue'], resolve)
        },{
          path: '/4.2',
          component: resolve => require(['@/components/pagecontent/Thirdapi.vue'], resolve)
        },{
          path: '/4.3',
          component: resolve => require(['@/components/pagecontent/Thirdapi.vue'], resolve)
        },{
          path: '/5.1',
          component: resolve => require(['@/components/pagecontent/Thirdapi.vue'], resolve)
        },{
          path: '/5.2',
          component: resolve => require(['@/components/pagecontent/Thirdapi.vue'], resolve)
        },{
          path: '/5.3',
          component: resolve => require(['@/components/pagecontent/Thirdapi.vue'], resolve)
        },{
          path: '/5.4',
          component: resolve => require(['@/components/pagecontent/Thirdapi.vue'], resolve)
        },{
          path: '/5.5',
          component: resolve => require(['@/components/mycenter/mycenter.vue'], resolve) , children:[
            {path: '/', component: resolve => require(['@/components/mycenter/order/withdraw/withdraw.vue'],resolve)},
        ]
        },{
          path: '/5.6',
          component: resolve => require(['@/components/mycenter/mycenter.vue'],resolve), children:[
            {path: '/', component: resolve => require(['@/components/mycenter/order/account/account.vue'],resolve)},
        ]
        },{
          path: '/6.1',
          component: resolve => require(['@/components/mycenter/mycenter.vue'],resolve), children:[
            {path: '/', component: resolve => require(['@/components/mycenter/order/deallog/deallog.vue'],resolve)},
        ]
        },{
          path: '/7.1',
          component: resolve => require(['@/components/pagecontent/Changepassword.vue'], resolve)
        },{
          path: '/7.2',
          component: resolve => require(['@/components/login'], resolve)
        }
      ]
    }
  ]
})
