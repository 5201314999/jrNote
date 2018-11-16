# koa2 cookies，session 

使用比较简单，同原生js 的一样

## cookies

koa2 中操作的cookies是使用了npm的cookies模块，源码在[https://github.com/pillarjs/cookies](https://github.com/pillarjs/cookies)，所以在读写cookie的使用参数与该模块的使用一致。

```
const Koa=require('koa');
const app=new Koa();

app.use(async (ctx)=>{
   if(ctx.url==='/index'){
       ctx.cookies.set('name','dd', {
           domain: 'localhost',  // 写cookie所在的域名
           path: '/',       // 写cookie所在的路径
           maxAge: 10 * 60 * 1000, // cookie有效时长
           expires: new Date('2019-02-15'),  // cookie失效时间
           httpOnly: false,  // 是否只用于http请求中获取
           overwrite: false  // 是否允许重写
         });
       ctx.body='cookies is ok';
       
       setTimeout(()=>{
           const name=ctx.cookies.get('name');
           console.log(name);
           ctx.body=`获取cookies-name:${name}`;
       },2000);
   }
   else {
       ctx.body="you are wrong";
   }
})

app.listen(3000,()=>{
   console.log('[koa cookies] is starting up at port 3000');
   console.log('http://localhost:3000');
});

```

## session


