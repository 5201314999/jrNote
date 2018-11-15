# koa 请求参数接收

## 前言

**web 请求都类似，非常容易理解,不详细说明**

## get 请求

```
    /**
 * Description 获取get 请求参数
 * @authors fanjiongrong (fanjiongrong@tvflnet.com)
 * @date    2018-11-15 11:27:06
 * @version 1.0.0
 */

 const Koa=require('koa');

 const app=new Koa();

 app.use(async (ctx) =>{
     //从request 对象取
     let url=ctx.url;
     console.log(ctx.request);
     let request=ctx.request;
     let req_query=ctx.request.query;
     let req_querystring=ctx.request.querystring;

     //从上下文中取
     let ctx_query=ctx.query;
     let ctx_querystring=ctx.querystring;

     ctx.body={
         url,
         req_query,
         req_querystring,
         ctx_query,
         ctx_querystring
     }
 })


 app.listen(3000);

 console.log('[demo] is starting at port 3000');
 console.log('http://localhost:3000');

```

## post 请求

1 ctx.request 是 context 经过封装的对象， ct.req 是 node.js 请求对象。
2 ctx.response ctx.res 同理
3 由于 koa 本身没有封装获取 post 请求参数的代码，不借助第三方中间件，代码和 node.js 原生 post 请求一致

```
  /**
* Description 解析node 请求的post 参数
* @authors fanjiongrong (fanjiongrong@tvflnet.com)
* @date    2018-11-15 17:38:30
* @version 1.0.0
*/
async function parsePostData(ctx) {
return new Promise((resolve, reject) => {
  try {
    let postData = '';
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    ctx.req.addListener('data', data => {
      postData += data;
      console.log(postData);
    });
    //结束后真正解析
    ctx.req.addListener('end', () => {
      let parsePostData = parseQueryStr(postData);
      resolve(parsePostData);
    });
  } catch (err) {
    reject(err);
  }
});
}

function parseQueryStr(queryStr) {
let queryData = {};
const queryStrList = queryStr.split('&');
console.log(queryStrList);
for (let  queryStr of queryStrList) {
  let itemList = queryStr.split('=');
  queryData[itemList[0]] = decodeURIComponent(itemList[1]);
}
return queryData;
}

module.exports=parsePostData;

```
