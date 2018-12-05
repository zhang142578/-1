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
					<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					<input class="mui-input-numbox" type="number" :value="item.num"/>
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
       </div>
        <div class="price">
          <span>￥{{item.data.productPrice*item.num}}</span>
        </div>
        </li>
      </ul>
    </div>
</template>
<script>
export default{
 data(){
   return{
     data:[]
   }
 } ,
 computed:{
    getgoods(){
      // 通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.getgoods
      }
    },
    created(){
      this.show()
    },
    methods:{
      show(){
       console.log(this.getgoods)
       
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
        height:100px;
        border:1px solid red;
        display: flex;
        justify-content:space-between;
        .mui-checkbox{
          input{
            margin-top:25px;
          }
          width:45%;
          height:100%;
          border:1px solid black;
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
          span{
            display: inline-block;
            height:98px;
            line-height: 98px;
          }
        }

      }
   }
 } 
</style>

