import VueRouter from 'vue-router'

import home from './components/tabbar/HomeContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import shopcart from './components/tabbar/ShopcartContainer.vue'
import search from './components/tabbar/SearchContainer.vue'
import newslist from './components/news/Newslist.vue'
import newsinfo from './components/news/newinfo.vue'
import photolist from './components/photos/photolist.vue'
import goodslist from './components/goods/goodslist.vue'
import goods from './components/goods/goods.vue'



var router=new VueRouter({
    routes:[//配置路由规则
        {path:"/",redirect:"/home"},
        {path:"/home",component:home},
        {path:"/member",component:member},
        {path:"/shopcart",component:shopcart},
        {path:"/search",component:search},
        {path:"/home/newslist",component:newslist},
        {path:"/home/newsinfo/:id",component:newsinfo},
        {path:"/home/photolist",component:photolist},
        {path:"/home/goodslist",component:goodslist},
        {path:"/home/goods/:id",component:goods}
    ],
    linkActiveClass:"mui-active" //覆盖默认路由高亮的类 “router-link-active”
})

// 吧路由对象 暴露出去
export default router