<template>
    <div class="goods-list">
        <div class="goods-item"  v-for="(item,index) in goodslist" :key="item.productId">
            
               <router-link class="ceng" :to="'/home/goods/'+index">
                <img :src="item.productImage" alt="">
            <h1 class="title">{{item.productName}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.productPrice}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
               </router-link>
        </div>
    </div>
</template>
<script>
import data from "../../data.json"
export default {
    data(){
        return{
            goodslist:[]
        }
    },
    created(){
        this.getlist();
    },
    methods:{
        getlist(){
            this.$http.get("src/data.json").then(result=>{
                //console.log(result)
              //  console.log(result.body.result.list[0].productImage)
                this.goodslist=result.body.result.list;
                console.log(this.goodslist);
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.goods-list{
    padding:7px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    
    .goods-item{
       
        padding:2px;
        min-height: 290px;
        margin:3px 0 ;
        border:1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        width:49%;
       .ceng{
           color: black;
        display: flex;
        height: 290px;
        flex-direction: column;
        justify-content: space-between;
            img{
            width:100%;
        }


        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            p{
                margin:0;
                padding:5px;
            }
            .price{
                .now{
                    color:red;
                    font-weight: bold;
                    font-size:16px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size:13px;
            }
        }
       }
    }
}
</style>
