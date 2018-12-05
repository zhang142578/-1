<template>
            <!-- 顶部滑动条 区域 -->
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item']" v-for="item in data" :key="item.id" >
							{{item.type}}
                            {{item.channelid}}
						</a>
					</div>
				</div>

			</div>

            <!-- 图片区域 -->
            <ul>
                 <li v-for="item in img" :key="item.url">
                     <img  v-lazy="item">
                 </li>
            </ul>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui'
import {Toast} from "mint-ui"
export default {
    data(){
        return {
            data:[],
            img:[],
            imglist:[]
        }
    },
    created(){
        this.getData();
        // this.getImg();
    },
    mounted()
    {
        mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods:{
        getData(){
            this.$http.get("https://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1").then(result=>{
               if(result.status==200){
                   console.log(result.body.results)
                   this.data=result.body.results
                   for(let i=0;i<result.body.results.length;i++){
                       this.img[i]=result.body.results[i].url
                   }
                   console.log(this.img)
               }
               else{
                   Toast("获取图片列表失败")
               }
            })
        },
        // getImg(){
        //     this.$http.get("https://api.apiopen.top/musicBroadcasting").then(result=>{
        //         for(var i=0;i<result.body.result[0].channellist.length;i++){
        //            // console.log(result.body.result[0].channellist[i].thumb)
        //             this.img[i]= {id:result.body.result[0].channellist[i].channelid,src:result.body.result[0].channellist[i].thumb}
        //         }
        //         //console.log(this.img)
        //     })
        // },
        getImglist(id){
            
         }
    }
}
</script>
<style lang="scss" scoped>
 * {
     touch-action: pan-y;
 }

 

ul{
    padding: 10px;
    margin: 0;
    li{
        box-shadow: 0 0 10px #999;
        margin:20px 0;
        list-style: none;
        background-color: #ccc;
        text-align: center;
        img[lazy=loading] {
     
        width: 40px;
        height: 300px;
        margin: auto;
        }

        img{
             width:100%;
             height:300px;
             vertical-align: middle;
        }       
    }
}
</style>
