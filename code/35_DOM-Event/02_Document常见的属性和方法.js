console.log(document.body)
console.log(document.title)
document.title = '百度视频'
console.log(document.title)




console.log(document.children[0])

// 常见方法
// 创建元素
const titleDiv = document.createElement('div')
const test = document.createTextNode('hi there')
titleDiv.appendChild(test)

const div1 = document.querySelector('.div1')
// var insertedNode = parentNode.insertBefore(newNode, referenceNode);
document.body.insertBefore(titleDiv, div1)

// 获取元素
const divEl2 = document.getElementById('box')
const spanEl = document.getElementsByTagName('span')
const spanEl2 = document.getElementsByName('why')
const divEl1 = document.querySelector('.div1')
const divs = document.querySelectorAll('.content')
console.log(divs)
