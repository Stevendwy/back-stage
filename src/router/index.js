import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: resolve => require(['@/components/Login.vue'], resolve)
        },{
            path: '/home',
            name: 'home', 
            component: resolve => require(['@/components/page/Home.vue'], resolve)
        }
    ]
})
