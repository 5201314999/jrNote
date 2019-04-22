# koa 连接数据库

## 前言

由于有java 开发经验，koa 链接数据库上手十分之快，如果只是借助koa 开发简单的数据接口，学完这个和之前的已经可以达到目的，废话不多说，直接上代码

有需要可以参考 [mysql 安装教程](jrNoteWebsite/docs/15mysql.html)


## 代码

```
    /**
 *  promise 封装 mysql 模块
 */

 const mysql= require('mysql');
 const config=require('../config/config');
 const pool=mysql.createPool(config.db);
 
 const query = function(sql,values){
     return new Promise((resolve,reject)=>{
         pool.getConnection(function(err,connection){
             if(err){
                 reject(err);
             }
             else{
                 connection.query(sql,values,(err,rows)=>{
                     if(err){
                         reject(err);
                     }
                     else{
                         resolve(rows);
                     }
                     connection.release();
                 })
             }
         })
     })
 }

 module.exports={
     query
 }

```