<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <van-list class="list" @scrollEnd = "getRecords"> 
        <li v-for="(item,index) in list" :key="index">
            {{item.name}}
        </li>
        <div class= "loading_tip" v-show="listConf.loading">加载中</div>
        <div class= "no_more_tip" v-show="listConf.no_more">没有更多</div>
    </van-list>
  </div>
</template>

<script>
import VanList from '@/components/van-list'
const Mock = require('mockjs')
export default {
  name: "App",
  data() {
    return {
      list: [],
      listConf: {
        loading: false,
        no_more: false,
        nTotal: 60 ,
        pageSize: 20,
        pageNum: 1
      }
    }
  },
  components: {
    VanList
  },
  mounted() {
      this.getRecords()
  },
  methods: {
    getRecords() {
        if(this.listConf.no_more|| this.listConf.loading) {
            return 
        }

        if(this.listConf.nTotal > 0 && this.listConf.nTotal <= this.list.length ) {
            this.listConf.no_more = true
            return
        }

        this.listConf.loading = true
        setTimeout(()=>{
            const tempList = Mock.mock({
                // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
                'list|20': [{
                    // 属性 id 是一个自增数，起始值为 1，每次增 1
                    'id|+1': 1,
                    'name':'@cname',
                    'nTotal': 20
                }]
            })
            this.listConf.loading = false
            this.list = [...this.list, ...tempList.list]
            console.log('list:'+this.list.length)
        },2000)
        
    }
  }
};
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list {
  border: 1px solid red;
  height: 400px;
  overflow: scroll;

}
  .li {
      height: 60px;
      line-height: 60px;
      font-size: 16px;
  }
.loading-tip,.no_more_tip {
    text-align: center;
    padding: 10px 20px;
}
</style>
