# vue项目


## 修改了新的


### 修改



## 首页 

1. HEADER 使用了 Mint-UI中的Header组件
2. Tabber区域使用了MUI 的 tabber组件
 + 制作购物车小图标时 
 + 先把 扩展图标的css样式  拷贝到 css文件夹中
 + 拷贝 扩展字体库的 ttf文件  到项目中
 + 为 购物车小图标 添加 样式
3.  中间 router-view 模块

## 改造 tabbar为 router-link

## 设置路由高亮  new VueRouter({}) 的参数 linkActiveClass 

## 点击 tabbar中的 路由连接 展示对应的 路由组件

## 制作首页轮播图布局 

## 加载首页轮播图数据
 1. 获取数据， 使用 vue-resource
 2. 使用vue-resource 的 this.$http.get 获取数据
 3. 获取到的数据绑定到 data
 4. v-for 遍历

## 九宫格区域 

## 新闻资讯 路由链接

## 新闻资讯 页面制作
1. 绘制页面
2. 使用vue-resource 获取数据
3. 渲染真实数据


## 实现1·实现 新闻资讯列表 点击跳转到新闻详情
 1. 把列表中的每一项改造为 router-link 同时 在跳转的时候用该提供唯一的ID标识符；
 2. 创建新闻详情的组件页面 NewsInfo.vue 
 3. 在 路由模块中 ， 讲新闻详情的路由地址 和 组件页面对应起来 


 ## 实现 新闻详情 的页面布局 和数据渲染