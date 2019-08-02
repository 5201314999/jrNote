# My js note

## 输出时间差
```
const timer=console.timeEnd();
consle.timer(timer);
```
## dom 有意思操作

```
var newNode=event.target.cloneNode(true);
dom.className='a';
dom.classList.add()/dom.classList.remove()

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


