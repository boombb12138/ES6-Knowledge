function foo(num1, num2, num3) {
    //1 遍历
    // console.log(arguments)
    // var newArr1 = []
    // for (var i = 0; i < arguments.length; i++) {
    //     newArr1.push(arguments[i])
    // }
    // return newArr1

    // 2 slice
    //2.1
    var newArr2 = Array.prototype.slice.call(arguments)
    console.log(newArr2)
    //2.2
    var newArr3 = [].slice.call(arguments)
    console.log(newArr3)

    // 3 ES6的语法
    // 3.1
    var newArr4 = Array.from(arguments)
    console.log(newArr4)
    // 3.2
    var newArr5 = [...arguments]
    console.log(newArr5)
}

var newArr = foo(1, 2, 3)