# My js note

## 输出时间差
```
console.log('测试');
console.timeEnd('测试);
```
## dom 有意思知识点
创建和插入新元素，删除现有元素以及修改其属性。
```
var newNode=event.target.cloneNode(true);

dom.className='a';

dom.classList.add()/dom.classList.remove()

dom.getAttribute()  dom.setAttribute()

dom.style.borderWidth/['border-width']  包含px  计算后的属性用 getComputedStyle().getPropertyValue()

DOMContentLoaded/onload/

宽高：offsetWidth offsetHeight 必须在dom 有才行，height 、width 不直接设置无法正确获取

dom.outerHTML()
```

## ajax XMLHttpRequest 

```
    //XMLHttpRequest 原生实现ajax
    function getJSON(url){
        return new Promise((resolve,reject)=>{
            const request=new XMLHttpRequest();
            request.open('GET',url);
            request.onload=function(){
                    if(this.status===200){
                        resolve(JSON.parse(this.response));
                    }
                    else{
                        reject(this.status + '  '+this.statusText);
                    }
            },
            request.onerror=()=>{
                reject(this.status+' '+this.statusText);
            }
            request.send();
        });
    }

    getJSON('./ajaxtest.json').then(res=>{
       alert(JSON.stringify(res));
    }).catch(e=>{
        console.log('异常');
        console.log(e);
    })

```




