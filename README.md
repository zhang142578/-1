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