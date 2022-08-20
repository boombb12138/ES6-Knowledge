// 
{
    let foo = "why"
    // 在只支持ES6的浏览器中demo()不可被外部访问
    function demo() {
        console.log('demo function')
    }
    class Person { }
}

// console.log(foo)//foo is not defined
demo()//demo function
// var p1 = new Person()// Person is not defined
