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
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            id:this.$route.params.id,
            num:1,
            data:{},
            shuliang:0,
            correct:false,
            index:0
        }
    },
    created(){
        this.show()
    },
    computed:{
        shopcart(){
           return this.$store.getters.getgoods
        }
    },
    methods:{
        show(){
            this.$http.get("src/data.json").then(result=>{
                this.data=result.body.result.list[this.id]
               // console.log(this.data)
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
        judge(){
            this.correct=false;
            for(let i=0;i<this.shopcart.length;i++){
               if(parseInt(this.shopcart[i].ID)==parseInt(this.id)){
                   this.index=i;
                   this.correct=true;
               }
           }
        },
       addcart(){
           
           this.judge()
          //console.log(this.shopcart)
         if(this.num==0){
             Toast("数量为0哦")
         }
         else{
             if(this.shopcart.length==0){
              this.$store.commit("setgoods",{ID:this.id, num:this.num,data:this.data})
           Toast("添加成功")
           this.num=0;
           this.setnum();
           //console.log(1)
       }
       else{
          // console.log(this.correct)
           if(this.correct){
               
                 this.$store.commit("changegoods",{num:this.num,index:this.index})
                   Toast("追加成功")
                   this.num=0;
                   this.setnum()
                   
                    this.index=0;
           }
           else{
               this.$store.commit("setgoods",{ID:this.id, num:this.num,data:this.data})
           Toast("添加成功")
           this.num=0;
           this.setnum();
          // console.log(1)
           }
       }
     }
       },
       setnum(){
           if(this.shopcart.length==0){

           }
           else{
               this.shuliang=0;
               for(var i=0;i<this.shopcart.length;i++){
                   this.shuliang+=this.shopcart[i].num;
                   this.$store.commit("setNum",this.shuliang)
               }
           }
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
