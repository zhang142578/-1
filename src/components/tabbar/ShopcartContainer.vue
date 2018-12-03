<template>
    <div>
      {{getcity}}
    </div>
</template>
<script>
export default{

 computed:{
    getcity(){
      // 通过vuex的getters方法来获取state里面的数据
      return this.$store.getters.getCityFn;
      }
    }
  }

</script>
<style lang="scss" scoped>

</style>

