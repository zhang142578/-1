<template>
    <div class="goodsinfo">
        <img :src="data.productImage" alt="">
        <div class="info">
            <h3>{{data.productName}}</h3>
            <span>￥{{data.productPrice}}</span>
        </div>
        <div class="content">
            <span class="aa">
                <input @click="minus()" class="btn" type="button" value="-">
                <input v-model="num" type="text" class="Num" value=" ">
                <input @click="add()" class="btn" type="button" value="+">
            </span>
            <input type="button" value="加入购物车" @click="addcart">
        </div>
    </div>
</template>
<script>
import goods from '../../data'
import bus from "../../bus.js"
export default {
    data(){
        return{
            id:this.$route.params.id,
            data:{},
            num:1
        }
    },
    created(){
        this.show()
    },
    methods:{
        show(){
            this.$http.get("src/data.json").then(result=>{
                this.data=result.body.result.list[this.id]
                console.log(this.data)
            })
        },
        add(){
            this.num++;
        },
        minus(){
            if(this.num>0){
                this.num=this.num-1;
            }
            else{

            }
        },
       addcart(){
           bus.$emit("addcart","666")
           console.log("OK")
       }
    }
}    
</script>

<style lang="scss" scoped>
.goodsinfo{
    img{
        width:100%;
        max-width: 100%;
        min-width:100%;
    }
    .info{
        line-height: 40px;
        display: flex;
        justify-content: space-between;
    }
    .content{
        .aa{
            display: flex;
            justify-content: space-around;
            height:40px;
            .Num{
                height:40px;
                line-height:40px;
                width:50px;
                margin:0;
                padding:0 3px;
                text-align: center;
        }
            .btn{
                height:40px;
                vertical-align:middle;
                margin:0;

            }
        }
        display: flex;
        justify-content: space-between;
    }
}

</style>
