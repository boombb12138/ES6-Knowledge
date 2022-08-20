// 封裝一个响应式函数
let relativeFns = []//name发生改变的所有需要重新执行的函数
function watchFn(fn) {
    relativeFns.push(fn)
}


const obj = {
    name: 'why',
    age: 18
}

watchFn(function foo() {
    const newName = obj.name
    console.log('你好李银河')
})

watchFn(function demo() {
    console.log(obj.name)
})

function bar() {
    console.log('不需要响应式')
}
obj.name = 'kobe'

relativeFns.forEach(fn => {
    fn()
})