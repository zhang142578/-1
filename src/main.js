import Vue from "vue"

//按需导入mintui中的组件
import {Header} from "mint-ui"

// 导入 MUI
import './lib/mui/css/mui.css'

Vue.component(Header.name,Header)

import app from "./app.vue"

var vm=new Vue({
    el:"#app",
    render:c => c(app)
})