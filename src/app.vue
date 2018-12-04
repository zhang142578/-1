<template>
    <div class="app-c">
        <!--顶部header-->
        <mt-header fixed title="123123123123vue项目"></mt-header>



        <!--中间的router-view-->

        <transition>
            <router-view></router-view>
        </transition>


        <!--底部的tabber-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-11b " to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-11b" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-11b" to="/shopcart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{this.showdata}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-11b" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default{
    data(){
        return{
            
        }
    },
    computed:{
        showdata(){
            return num= this.$store.getters.getNum
            
        }
    },
    
    methods:{
    
    }
}
</script>
<style scoped>
.app-c{
    padding-top:40px;
    padding-bottom: 40px;
    overflow-x: hidden;
}
.v-enter{
    opacity: 0;
    transform: translateX(100%);
}
.v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
.v-enter-active,
.v-leave-active{
    transition: all 0.5s ease-in-out
}


.mui-bar-tab .mui-tab-item-11b.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-11b {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-11b .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-11b .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>