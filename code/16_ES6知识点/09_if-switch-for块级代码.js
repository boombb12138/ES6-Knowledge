{

}
// if语句的代码就是块级作用域
if (true) {
    var foo = 'foo'
    let bar = 'bar'
}

console.log(foo)
// console.log(bar)// bar is not defined

var color = 'red'

// swith语句的代码是块级作用域
switch (color) {
    case 'red':
        var foo = 'foo'
        let bar = 'bar'
}

console.log(foo)
// console.log(bar)// bar is not defined

// for (var i = 0; i < 10; i++) {

// }

// console.log(i)//10

for (let i = 0; i < 10; i++) {

}

console.log(i)//undefined
