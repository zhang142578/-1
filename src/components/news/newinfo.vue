<template>
    <div class="newsinfo-container">
        <h3 class="title">
            {{newsinfo.title}}
        </h3>
        <p class="subtitle">
            <span>发表时间:{{newsinfo.ctime}}</span>
            <span>点击：0次</span>
        </p>
        
        <hr>
        <div class="content">
            {{newsinfo.title}}
        </div>
        <hr>
        <comment-box></comment-box>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
import  comment from "../subcomponents/comment.vue"
export default {
    data(){
        return{
            id:this.$route.params.id,//将URL传过来的ID挂载到 data上 方便调用
            newsinfo:[]
        }
    },
    created(){
        this.getnewsinfo()
    },
    methods:{
        getnewsinfo(){//获取新闻详情
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
            .then(result=> {
                if(result.status==200){
                    this.newsinfo=result.body.showapi_res_body.newslist[this.id]
                }
                else{
                    Toast("获取新闻失败")
                }
            })
        }
    },
    components:{
        'comment-box':comment
     }
}
</script>
<style lang="scss" scoped>
.newsinfo-container{
    padding:0 4px;
    .title{
        text-align: center;
        margin:15px 0;
        color:Red;
        font-size: 16px;
    }
    .subtitle{
        font-size: 13px;
        color:#226aff;
        display: flex;
        justify-content: space-between;
    }
    
}
</style>

