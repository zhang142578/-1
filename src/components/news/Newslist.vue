<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item , index) in newslist" :key="item.url">
					<router-link :to="'/home/newsinfo/'+index">
						<img class="mui-media-object mui-pull-left" :src="item.picUrl">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{item.ctime}}</span>
                                <span>点击次数：0次</span>
                                </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
import {Toast} from "mint-ui"

export default {
    data(){
        return{
            newslist:[]
        }
    },
    created(){
        this.getnewslist()
    },
    methods:{
        getnewslist(){
            this.$http.post("https://route.showapi.com/181-1",{
                 "showapi_timestamp": this.date,
                 "showapi_appid": '81469', //这里需要改成自己的appid
                 "showapi_sign": 'eea8829a331c4c3d86b3c8711458fee1',  //这里需要改成自己的应用的密钥secret
                 "num":"10",
                 "rand":"1",
                 "word":"彩票",
                 "page":"1",
                 "src":"人民日报"
            },{emulateJSON:true})
            .then(result=>{
                if(result.status==200){
                    // 如果没有失败 保存到data上
                    this.newslist=result.body.showapi_res_body.newslist
                    //console.log(result.body.showapi_res_body)
                   // console.log(this.newslist)
                }
                else{
                    Toast("获取列表失败")
                }
            })
           
        }
    }
}
</script>
<style lang="scss" scoped>
    li{
        h1{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color:#226aff;
            display: flex;
            justify-content: space-between;
        }
        img{
            width:42px;
            height:42px;
        }
    }
</style>
