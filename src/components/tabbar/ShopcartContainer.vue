<template>
    <div class="items">
      <ul class="cartitem">
        <li v-for="item in getgoods" :key="item.id">
          <div class="mui-input-row mui-checkbox mui-left">
						<input name="checkbox" value="Item 1" type="checkbox" >
             <img :src="item.data.productImage" alt="">
					</div>
       <div class="info">
         <h3>{{item.data.productName}}</h3>
          <div class="mui-numbox">
					<button class="mui-btn mui-btn-numbox-minus" @click="miuns(item.ID)" type="button">-</button>
					<input class="mui-input-numbox" type="number" :value="item.num"/>
					<button class="mui-btn mui-btn-numbox-plus" @click="add(item.ID)" type="button">+</button>
				</div>
       </div>
        <div class="price">
          <span class="tprice">
            ￥{{item.data.productPrice*item.num}}
          </span>
          <span class="del" @click="remove(item.ID)">
            删除
          </span>
        </div>
        </li>
      </ul>

      <div class="check" v-if="this.panduan">
       <div class="doudong">
         
          <span class="Tprice">总计:￥{{this.getzongji}}</span>
        <span class="end">结算</span>
       </div>
       
      </div>
      <div class="show" v-if="!this.panduan">
        <h3>购物车空空如也</h3>
      </div>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default{
 data(){
   return{
     data:[],
     num:0,
     panduan:false
   }
 } ,
 computed:{
   getzongji(){
     return this.$store.getters.getzongji
   },
    getgoods(){
      // 通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.getgoods
      }
    },
    created(){
      this.show()
      this.Panduan()
    },
    methods:{
      Panduan(){
         if(this.getgoods!=""){
        this.panduan=true
      }
      else this.panduan=false
      },
      show(){
       //console.log(this.getgoods)
      },
      add(index){
        this.$store.commit("addNum",index)
        this.setNum()
      },
      miuns(index){
        this.$store.commit("miunsNum",index)
        this.setNum()
      },
      setNum(){
        this.num=0
        for(var i=0;i<this.getgoods.length;i++){
          this.num+=this.getgoods[i].num
        }
        //console.log(this.num)
        this.$store.commit("setNum",this.num)
      },
      remove(index){
        this.$store.commit("remove",index)
        Toast("删除成功")
        this.setNum()
        
      this.Panduan()
      }
    }
  }

</script>
<style lang="scss" scoped>
 .items{
   .cartitem{
     list-style:none;
     margin:0;
     padding: 0;
      li{
        border:1px solid silver;
        margin:10px 0;
        height:100px;
        display: flex;
        justify-content:space-between;
        .mui-checkbox{
          input{
            margin-top:25px;
          }
          width:45%;
          height:100%;
          img{
          margin-top:10px;
          margin-left:60px;
          width:75px;
          height:75px;
          }
        }
        .info{
          .mui-numbox{           
            margin-top:20px;
          }
        }
        .price{
          margin-right:10px;
          height: 105px;
          .tprice{
            display: inline-block;
            height:50px;
            line-height: 50px;
            width:36px;
          }
          .del{
            width:50px;
            text-align: right;
             display: inline-block;
            height:50px;
            line-height: 50px;
          }
        }

      }
   }
   .check{
     
     position: fixed;
     transform: translateZ(0);
     -webkit-transform: translateZ(0);
     bottom:50px;
     width:100%;
     .doudong{
      justify-content: space-around;   
      width:100%;
       display: flex;
       position:absolute;   
       right:1px;
       bottom:1px;
       span{
       display: inline-block;
       height:50px;
       line-height: 50px;
       flex:5;
       text-align: center;
     }
     .Tprice{
       
       color:rgb(117, 117, 117);
       background-color: rgb(240, 153, 94);
     }
     .end{
       
       color:red;
       background-color: silver;
     }
     }
   }
 } 
</style>

