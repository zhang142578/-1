<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="../../images/小米手机.jpg" alt="">
            <h1 class="title">小米(MI)小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/小米手机.jpg" alt="">
            <h1 class="title">小米(MI)小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="../../images/尼康.jpg" alt="">
            <h1 class="title">尼康相机</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.goods-list{
    padding:7px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .goods-item{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding:2px;
        min-height: 290px;
        margin:3px 0 ;
        border:1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        width:49%;
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
                .old{
                    text-decoration: line-through;
                    font-size:12px;
                    margin-left:10px;
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
</style>
