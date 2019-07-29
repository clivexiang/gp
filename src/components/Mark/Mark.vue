<template>
    <div>
        <p v-show="show">这是一段文本</p>
        <button v-on:click='handleclose'>点击隐藏</button>
       <button v-if="showBtn" @click='handleclick'>click me</button>
       <div>
         <ul>
           <li v-for="book in books" :key="book.id">{{ book.name}}</li>
       </ul>
       <span v-html="link"></span>
       <h4>{{ date }}</h4>
       <a :href="url">链接</a>
       <img  v-bind:src="imgUrl" >
       </div>
      
    </div>
</template>

<script>
export default {
    data () {
        return{
            show: true,
            url: 'https://www.github.com',
            imgUrl: 'https://cdn.learnku.com//uploads/communities/WtC3cPLHzMbKRSZnagU9.png',
            link: '<a href="#"> 这是一个链接</a> ',
            date: new Date(),
          showBtn: true,
          books: [
              { name: '号aa' },
              { name: '哈bb' },
              { name: '佳cc' }
          ]
        }
    },
    methods:{
        handleclick(){
            console.log('cliked');
        },
        handleclose(){
            this.show =false;
        }

    }
}
</script>

<style>

</style>
