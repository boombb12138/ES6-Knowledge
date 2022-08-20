function foo() {

}

// 监听foo函数是怎么被调用的
const fooProxy = new Proxy(foo, {
    apply: function (target, thisArg, argArr) {
        console.log('对foo函数进行了apply调用')
        return target.apply(thisArg, argArr)
    },
    construct: function (target, argArr) {
        console.log('对foo函数进行了new调用')
        return new target(...argArr)
    }
})




fooProxy.apply({}, ['abc', 'cba'])
new fooProxy('abc', 'cba')