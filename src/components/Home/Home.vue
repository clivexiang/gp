<template>

  <div>
    <ve-candle :data="chartData"></ve-candle>
     <label for="title" class="headerTitle">股票智慧预测</label>
    <div class="content">
      <mt-field
        label="股票代码"
        placeholder="股票代码"
        :attr="{ maxlength: 6 }"
        v-model="st_code"
        @change="savelist()"
      ></mt-field>
      <mt-field
        label="买入股票的价格"
        placeholder="pirce"
        :attr="{ minlength: 1 }"
        v-model="s_price"
        @change="setButtonTure()"
      >元</mt-field>
      <mt-field label="股票现在的价格" placeholder="price" :attr="{ minlength: 1 }" v-model="c_price">元</mt-field>
   
      <mt-button type="primary" @click="cpt()" :disabled="isButttonDisable">确定</mt-button>
      <label for="">推荐理财</label>
      <ul class="gird">
        <li>
          <a href="#">
            <b>
             <span>天天理财</span>
            </b>
            <span>理财师</span>
          </a>
        </li>
        <li>
          <a href="#">
            <b>
              <span>添添基金</span>
            </b>
            <span>月收益2%</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
      isButttonDisable: true,
      st_code: "",
      s_price: "",
      c_price: "",
      alldata:[],
      mdata: { },
      chartData: []
    };
  },
  created() {
    this.$axios.get("http://localhost:8080/static/h.json").then(res => {
      this.chartData = res.data;
    })
    this.getData()
   
  },
  beforeUpdate() {
    console.log("111111");

    // this.setButtonTure();
  },
  methods: {
    cpt() {
      if (this.st_code.length < 6)
       {
        this.$toast("请写入股票代码");
        
      } else if (this.st_code === 666666) {
        this.$toast("股票已退市");
      } else {
        let change_price = this.s_price - this.c_price;
        if (
          change_price <= 0 &&
          this.s_price.length != 0 &&
          this.c_price.length != 0
        ) {
          this.$toast("你已获得收益，目前形式挺好 请继续持有");
        } else if (
          change_price > 0 &&
          this.s_price.length != 0 &&
          this.c_price.length != 0
        ) {
          let scode = parseInt(this.st_code.slice(0, 4));

          console.log(scode + "code");
          switch (scode) {
            case 6016:
              this.$toast("蓝筹股票预测中")
                this.$router.push({
              path: "/detail",
              name: "Cptdetail",
              params: {
              key: "key",
              st_code: this.st_code
             }
             });
              break;

            default:
              this.$toast("股票预测中...")
                  this.$router.push({
              path: "/detail",
              name: "Cptdetail",
              params: {
              key: "key",
              st_code: this.st_code
             }
             })
              break;
          }

             
        }
      }
    },
    savelist() {
     
      localStorage.setItem("cCode", JSON.stringify(this.st_code));
     
      console.log(localStorage.getItem("cCode"))
      let allData = JSON.parse(localStorage.getItem("allData"))
      console.log(allData);
      let d= localStorage.getItem("cCode");
      let keyName=this.st_code
      //遍历读取数据模型
       for (var index in  allData)
       {
        console.log(allData[index])
           for( var key in  allData[index])
                if (key == this.st_code){
                  console.log(allData[index][key] +key )
                   this.mdata=allData[index][key]
                   localStorage.setItem("mdata", JSON.stringify(this.mdata));
                }
        // 
       }
           console.log(localStorage.getItem("mdata")+"222")
   
       
    },
    setButtonTure() {
      if (
        this.st_code.length != null &&
        this.st_code != null &&
        this.s_price != null 
       
      ) {
        this.isButttonDisable = false;
        console.log("eeeeee");
      } else {
        this.isButttonDisable = true;
      }
    },
     getData(){
         this.$axios.get("http://localhost:8080/static/all.json").then(res => {
       
          let allData=res.data
          localStorage.setItem('allData',JSON.stringify(allData));
          });
    }
  }
};
</script>

<style scoped>
.content {
  height: 300px;
}
.ve-candle {
  height: 330px !important;
}
.mint-button--primary {
  background-color: goldenrod;
  color: black;
}

div {
  background-color: white;

}
.gird {
  margin-top: auto;
  height: 200px;
  background-color: yellowgreen;
}
.gird li {
  float: left;
  text-align: center;
  margin-top: 2.5%;
  width: 44%;
  border-radius: 3px;
  overflow: hidden;
}

.gird li a {
  display: block;
  color: #fff;
  text-align: center;
}
.gird li a b {
  display: block;
  height: 80px;
}

.gird li a img {
  margin: 15px auto 15px;
  width: 50px;
  height: 50px;
}
</style>

