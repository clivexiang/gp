<template>
<div>
<mt-header  title="股票智慧解套锦囊">
  <!-- <router-link to='/' slot="left">
    <mt-button icon="back">返回</mt-button>
 
  </router-link> -->
</mt-header>

<router-view></router-view>
<mt-tabbar fixed v-model="selected">
  <mt-tab-item id="home">
    <img slot="icon" src="./assets/logo.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="news">
    <img slot="icon" src="./assets/logo.png">
   见闻
  </mt-tab-item>
  <mt-tab-item id="mark">
    <img slot="icon" src="./assets/logo.png">
    行情
  </mt-tab-item>
  <mt-tab-item id="me">
    <img slot="icon" src="./assets/logo.png">
    我的
  </mt-tab-item>
</mt-tabbar>


</div>


</template>

<script>

export default {
  name: 'page-tabbar',
  data() {
  
    return {
       selected: 'home'
    }
  },
  methods :{
    goback(){
      this.$router.go(-1)
    }
  },
  watch: {
    selected (newV, oleV){
      this.$router.push({
        name: newV
      })
    }
  }
}
</script>

<style>

</style>

