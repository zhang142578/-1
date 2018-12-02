<template>
            <!-- 顶部滑动条 区域 -->
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item']" v-for="item in data" :key="item.thumb" @click="getData()">
							{{item.name}}
                            {{item.channelid}}
						</a>
					</div>
				</div>

			</div>

            <!-- 图片区域 -->
            <ul>
                 <li v-for="item in img" :key="item.thumb">
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
            this.$http.get("https://api.apiopen.top/musicBroadcasting").then(result=>{
                if(result.status==200){
                    // this.data=result.body;
                    this.data=result.body.result[0].channellist
                   
                   for(var i=0;i<result.body.result[0].channellist.length;i++){
                   // console.log(result.body.result[0].channellist[i].thumb)
                    this.img[i]= {id:result.body.result[0].channellist[i].channelid,src:result.body.result[0].channellist[i].thumb}
                    
                }
                this.imglist=this.img;
                     this.data.unshift({name:"全部",channelid:0})
                   // console.log(this.id);
                }
                
                else{
                    Toast("获取列表失败")
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
