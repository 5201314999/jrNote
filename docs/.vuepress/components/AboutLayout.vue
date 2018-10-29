<template>
  <div class="container">
    <p class="protocol">本套文章采用 <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">署名-非商业性使用-禁止演绎 4.0 国际</a> 许可协议。</p>
    <div class="desc-box">
      <div class="desc-name">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540812849561&di=627f2a1d6a287b9f86838c82bcdfb639&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fcb1125c32f53917c8b2f81bca33180e8426cfbdb.jpg">
        <p>作者</p>
      </div>
      <div class="desc-text">
        <p><span>大名：</span>Mr.Fan</p>
        <p><span>小名：</span>jr</p>
        <p><span>职业：</span>富士康前端小工</p>
        <p><a href="https://github.com/5201314999">Github</a></p>
      </div>
    </div>
  </div>
  </div>
</template>
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
        display: block;
        width: 120px;
        padding: 20px;
        margin-right: 20px;
        border-right: 1px solid #dddddd;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
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
        }
      }
    }
  }
</style>
