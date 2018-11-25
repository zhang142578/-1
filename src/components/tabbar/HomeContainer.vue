<template>
    <div>
        
        <h3>HomeContainer</h3>
    
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.url">
                <img :src="item.picUrl" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!--  6宫格区域  -->
        <div class="mui-content">
		    <ul class="mui-table-view mui-grid-view mui-grid-9">
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                <span class="mui-icon mui-icon-home"></span>
		                <div class="mui-media-body">新闻资讯</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                <span class="mui-icon mui-icon-email"></span>
		                <div class="mui-media-body">图片分享</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                <span class="mui-icon mui-icon-chatbubble"></span>
		                <div class="mui-media-body">商品购买</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                <span class="mui-icon mui-icon-location"></span>
		                <div class="mui-media-body">留言反馈</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                <span class="mui-icon mui-icon-search"></span>
		                <div class="mui-media-body">视频专区</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                <span class="mui-icon mui-icon-phone"></span>
		                <div class="mui-media-body">联系我们</div></a></li>
		    </ul> 
		</div>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            lunbotulist:[],
            time:"",
        }
    },
    created(){
       this.generateTimeReqestNumber()
        this.getLunbotu()
    },
    methods:{
        getLunbotu(){
            this.$http.post("https://route.showapi.com/181-1",{
                 "showapi_timestamp": this.date,
                 "showapi_appid": '81469', //这里需要改成自己的appid
                 "showapi_sign": 'eea8829a331c4c3d86b3c8711458fee1',  //这里需要改成自己的应用的密钥secret
                 "num":"10",
                 "rand":"1",
                 "word":"盗墓笔记",
                 "page":"1",
                 "src":"人民日报"
            },{emulateJSON:true})
            .then(result=>{
                if(result.status == 200){
                   // console.log(result.status)
                    //console.log(result)
                   // console.log(result.body.showapi_res_body.newslist)
                
                        this.lunbotulist=result.body.showapi_res_body.newslist
                
                   // console.log(this.lunbotulist)
                   
                }
                else{
                    Toast("加载轮播图失败")
                }
            })
           
        },
       generateTimeReqestNumber() {
         var date = new Date();
         this.date= date.getFullYear().toString() +this.pad2(date.getMonth() + 1) +this.pad2(date.getDate()) + this.pad2(date.getHours()) + this.pad2(date.getMinutes()) + this.pad2(date.getSeconds());
       // console.log(this.date)
        },
        pad2(n) { return n < 10 ? '0' + n : n }

    }
}
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
        .mint-swipe-item{
            &:nth-child(1){
                background-color: red;
            }
            &:nth-child(2){
                background-color: blue;
            }
            &:nth-child(3){
                background-color: pink;
            }


            img{
                width:100%;
                height:100%;
            }
        }
       
    }


    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:none;
    }
</style>

