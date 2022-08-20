const span = document.querySelector('.span')
// 事件冒泡
span.addEventListener('click', (event) => {
    console.log('span被点击了')
    event.stopPropagation()

})

const div = document.querySelector('.box')
div.addEventListener('click', () => {
    console.log('div被点击了')
})

document.body.addEventListener('click', () => {
    console.log('body被点击了')
})

// 事件捕获
span.addEventListener('click', () => {
    console.log('span被点击了')
}, true)

div.addEventListener('click', () => {
    console.log('div被点击了')
}, true)

document.body.addEventListener('click', (event) => {
    console.log('body被点击了')
}, true)
