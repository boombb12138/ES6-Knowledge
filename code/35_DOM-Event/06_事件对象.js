const span = document.querySelector('.span')
span.addEventListener('click', (event) => {
    console.log('span元素被点击', event)
    console.log('span元素被点击', event.type)
    console.log('span元素被点击', event.target, event.currentTarget)
    console.log('事件发生的位置', event.offsetX, event.offsetY)
})

const boxDiv = document.querySelector('.box')
boxDiv.addEventListener('click', (event) => {
    console.log(event.target, event.currentTarget)
})


// 常见方法
// preventDefault
const aEl = document.querySelector('.a')
aEl.addEventListener('click', (event) => {
    event.preventDefault();
})

// 2 阻止事件繁殖
// 见05