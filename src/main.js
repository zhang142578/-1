import Vue from "vue"

import vueRouter from 'vue-router'

import VueResource from "vue-resource"

Vue.use(vueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'https://route.showapi.com/181-1';

//按需导入mintui中的组件
import {Header, Swipe, SwipeItem } from "mint-ui"

// 导入 MUI
import './lib/mui/css/mui.css'

//导入 MUI 扩展 图标库
import './lib/mui/css/icons-extra.css'

import router from './router.js'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import app from "./app.vue"

var vm=new Vue({
    el:"#app",
    render:c => c(app),
    router
})