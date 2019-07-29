<template>


  <div>

  <router-link to='/' slot="left" >
    <mt-button icon="back" class="a333">返回</mt-button>
 
  </router-link>

    <div class="gird">
      <label for="">最新一周股票预测</label>
      <br>
      <label for="股票代码"></label> <label for="">{{ mData.name }}-{{items}}</label>
     <mt-progress :value="2">
      <div slot="start">2%</div>
      <div slot="end">98%</div>
    </mt-progress>
    <div>
     <mt-button type="danger" size="normal" class="higButton">看涨</mt-button>
     <mt-button type="primary" size="normal" class="lowButton">看跌</mt-button>
    </div>
    </div>
    <div>
     <mt-cell title="预计股票上涨值"> {{ days}}</mt-cell>
    </div>

     <div>
       <div></div>
       <label for="" class="b1">持有该股票的联系人</label>
       <mt-cell title="小米"><button @click="m1">合力解套</button></mt-cell>
      <mt-cell title="华为"><button @click="m1">合力解套</button></mt-cell>
    </div>
  </div>

  
</template>

<script>
export default {

  data() {
  
    return {
       items: "",
       days: '',
       value: '',
      
       mData: { }
    };
  },
  created(){
    JSON.parse
     let mdata=  JSON.parse(localStorage.getItem("mdata"))
     this.mData=mdata;
       
  },
  
   mounted:function(){
        
        let d =localStorage.getItem("cCode")
         console.log('-----1'+d)
         this.items = d.replace("\"","").replace("\"","") //去除双引号
         console.log(d) 
      
         },
  methods: {
    m1(){
        this.$toast("加群讨论");
        console.log('2222')
    }
    
     
  }
}
</script>

<style scoped>
.a333{


  width: 30%;
  margin-left:0px;
  top: 0px;
  height: 40px;
  
  left: 0px;
  background-color:#26a2ff;
  position: absolute; 
}

.gird {
  height: 160px;
  background-color: aquamarine;
}

.higButton{
  width: 40%;
}
.lowButton{
   width: 40%;
}



.b1{
  height: 20px;
  margin-top: 5px;
  margin-left: 10px;
  font-size: 10px !important;
}

</style>
