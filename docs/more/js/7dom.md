## 布局抖动问题

1. 使用不会导致浏览器重排的写法

批量读 dom，批量写 dom，这样就不会频繁计算布局

`注意`： 记住会导致重排属性，使用时小心
      
|    接口对象   |       属性名   |  
|:-----------:|:-------------:|
| Element | clientHeight, clientLeft, clientTop, clientWidth, focus, getBoundingClientRect, getClientRects, innerText, offsetHeight,offsetLeft, offsetParent, offsetTop, offsetWidth, outerText,scrollByLines, scrollByPages, scrollHeight, scrollIntoView,scrollIntoViewIfNeeded, scrollLeft, scrollTop, scrollWidth |
| MouseEvent | layerX, layerY, offsetX, offsetY |
| Window | getComputedStyle, scrollBy, scrollTo, scroll, scrollY |
|Frame, Document, Image | height, width |
