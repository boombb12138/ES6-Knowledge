// const clickHandler = () => {
//     console.log('window被点击了')
// }

// window.addEventListener('click', clickHandler)

// window.removeEventListener('click', clickHandler)

window.addEventListener('coderwhy', () => {
    console.log('coderwhy事件被点击')
})

window.dispatchEvent(new Event('coderwhy'))
