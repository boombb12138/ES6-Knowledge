const divEl2 = document.querySelector('.content')

console.log(divEl2.offsetLeft)
console.log(divEl2.offsetTop)

// 常见方法
// 返回指定元素上一个指定的属性值
const nameValue = divEl2.getAttribute('name')
console.log(nameValue)
divEl2.setAttribute('name', 'kobe')
console.log(divEl2.getAttribute('name'))