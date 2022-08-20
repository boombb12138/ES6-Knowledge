// 1 常见属性
// console.log(window.screenX)

window.addEventListener('scroll', () => {
    // console.log(window.scrollX, window.scrollY)
})

// 2 常见方法
const scrollBtn = document.querySelector('#btn')
scrollBtn.onclick = function () {
    // 1 scrollTo
    window.scrollTo({
        top: 200
    })

    // 2 close
    // window.close()

    // 3 open
    window.open('http://www.baidu.com', '_self')

}

// 3 常见事件
window.onload = function () {
    console.log('window窗口加载完毕')
}

window.onfocus = function () {
    console.log('window窗口获取焦点')
}

window.onblur = function () {
    console.log('window窗口失去焦点')
}

const hash = document.querySelector('#hashbtn')
hash.onclick = function () {
    location.hash = 'aaa'
}
// 监听哈希值改变
window.onhashchange = function () {
    console.log('hash发生了改变')
}