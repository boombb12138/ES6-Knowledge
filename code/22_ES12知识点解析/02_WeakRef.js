const finalRegistry = new FinalizationRegistry((value) => {
    console.log('注册在finalRegistry的对象，某一个被销毁', value)
})

let obj = { name: 'why' }
// let info = obj
//希望info对对象的引用是个弱引用
// 法1
// let info = new WeakSet()
// info.add(obj)
// 法2  ES12新增类WeakRef
let info = new WeakRef(obj)


// 可以检测某个对象有没有被回收
finalRegistry.register(obj, 'obj')

//WeakRef.prototype.deref（）
// 如果源对象没有被销毁，那么可以拿到苑对象
// 如果源对象被销毁，则获取到的是undefined
console.log(info.deref().name)

obj = null