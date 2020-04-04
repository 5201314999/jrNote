<template>
  <div class="container">
    <p class="protocol">本网站采用 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">署名-非商业性使用-禁止演绎 4.0 国际</a> 许可协议。</p>
    <div class="desc-box">
      <div class="desc-name">
        <img :src="`${base}/about/logo.jpg`">
      </div>
      <div class="desc-text">
        <p><span>姓名：</span><span class="name">Mr.jr</span></p>
        <p><span>职业：</span><span class="job">富士康前端小工</span></p>
        <p><span>介绍：</span><span class="moto">不会写笔记却非要写笔记的读书人</span></p>
        <p><a href="https://github.com/5201314999">Github</a></p>
        <!-- <a><a href="https://5201314999.github.io/">hexo</a></p> -->
        <p><a href="http://www.moontea.top/hexoblog">博客</a></p>
        
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  const config=require('@/config.js')
  export default{
    data(){
      return {
        base:config.base
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    text-align: center;

    .desc-box {
      display: flex;
      width: 500px;
      margin: 100px auto;
      padding: 20px;
      box-shadow: 0 4px 0 4px #e9e9e9;
      border-radius: 4px;
      align-items: cneter;
      box-shadow: 2px 2px 8px 4px #e9e9e9;
      .desc-name {
        display: flex;
        padding: 20px;
        margin-right: 20px;
        border-right: 1px solid #dddddd;
        img {
          width: 120px;
          border-radius: 10px;
          vertical-align: middle;
        }
        p {
          margin: 0;
        }
      }
      .desc-text {
        flex: 1;
        padding: 10px;
        p {
          margin: 0;
          text-align: left;
          .name{
            font-weight: 600;
            font-size:20px;
            font-style: italic;
          }
          .job,.moto{
             font-weight: 600;
            font-size:16px;
          }
        }
      }
    }
  }
</style>
