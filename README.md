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


 ## 单独封装一个 comment.vue 评论子组件 
 1. 先创建一个 单独的 comment.vue 组件模板
 2. 需要使用comment 组件的页面中 手动导入 comment 组件 
 3. 再父组件中 使用components 属性 将刚才导入的 comment 组件 注册为自己的子组件 


 ## 图片分享 页面
 1. 顶部滑动条 MUI 

  + 借助于mui中的 tab-top-werbview-main.html
  + 需要把 mui-fullscreen 去掉
  + 滑动条无法正常触发滑动，通过检查官方文档 这是JS文件 需要初始化 
    + 需要导入mui.js
    + 调用 官方提供的方式去初始化：
     ```
     mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
     ```
  + 初始化滑动条的时候 导入了 MUI.js 但是 控制台报错 
    Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them 
  + 经过合理推测 可能是MUI.js用到了  'caller', 'callee', and 'arguments'  但是 webpack 打包好的bundle.js默认是启用严格模式的
    所以 这两者 冲突了
  + 解决方案： 1. 将 MUI中使用到的属性移除 (不可行) 
              2. 将webpack的严格模式去除掉 
  + 使用 babel-plugin-transform-remove-strict-mode插件 将严格模式去除
2. 滑动条无法正常工作 需要重新刷新 ： 一定要把初始化函数放在mouted钩子函数中
3. 解决滑动条之后 发现tabber无法正常工作  吧 每个 tabber 按钮的样式中‘mui-tab-item’ 无法正常工作 把每个 tabber 中的                'mui-tab-item' 重新改名字


## 图片列表区域
 1. 图片列表根据需要使用懒加载技术 使用Mint-ui 提供的组件 “lazy-loda”


## 尝试在手机上 进行项目的预览和测试
 1. 要保证 手机可以正常运行
 2. 保证手机 和 电脑处于 相同WIFI中 手机可以访问到电脑的IP
 3. 打开自己的项目中 package.json 文件 再dev脚本中 调价一个 --host 指令，把 当前电脑的 WIFI 的 ip地址设置为 host的指令值