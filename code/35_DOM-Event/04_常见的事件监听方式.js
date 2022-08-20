//法1
// function divClick() {
//     console.log('divClick')
// }


const div = document.querySelector('.box')

//法2
// div.onclick = function () {
//     console.log('div元素被点击')
// }

//法3
div.addEventListener('click', () => {
    console.log('div元素被点击')
}
)
div.addEventListener('click', () => {
    console.log('div元素被点击22')
}
)

