// slice和splice

// foo是纯函数
// 1.相同的输入有相同的输出(不依赖外界变量)
// 2.没有其他副作用（修改全局的变量、传入的参数、localStorage)
function foo(num1, num2) {
    return num1 * 2 + num2 * num2
}

//修改了全局变量
var name = 'abc'
function bar() {
    name = 'cna'
}
console.log(name)

// 修改了参数
function HelloWorld(props) {
    props.info = {}
}