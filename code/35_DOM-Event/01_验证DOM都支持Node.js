const divEl = document.querySelector('#box')
const spanEl = document.querySelector('.content')

console.log(divEl.nodeName, spanEl.nodeName)
console.log(divEl.nodeType, spanEl.nodeType)
console.log(divEl.nodeValue, spanEl.nodeValue)


// childNodes
const spanChildNodes = spanEl.childNodes
console.log(spanChildNodes[0].nodeValue)

// 常见方法
const strongEl = document.createElement('strong')
strongEl.textContent = '我是strong元素'
divEl.appendChild(strongEl)


const strongEl2 = document.createElement('strong')
strongEl2.textContent = '我是strong2元素'

// 注：
// document.appendChild()不行 不能直接在文档里面添加元素
document.body.appendChild(strongEl2)