const obj1 = {
    name: 'why',
    age: 18
}

function obj1NameFn1() {
    console.log('obj1NameFn1被执行')
}
function obj2NameFn1() {
    console.log('obj1NameFn2被执行')
}

function obj1AgeFn1() {
    console.log('obj1AgeFn1')
}
function obj1AgeFn2() {
    console.log('obj1AgeFn2')
}


const obj2 = {
    name: 'kobe',
    height: 1.88,
    address: '广州市'
}

function obj2NameFn1() {
    console.log('obj2NameFn1被执行')
}
function obj2NameFn1() {
    console.log('obj2NameFn1被执行')
}

function obj2AgeFn1() {
    console.log('obj2AgeFn1')
}
function obj2AgeFn2() {
    console.log('obj2AgeFn2')
}

// 建立数据结构 将name和对应的方法关联到一起
const weakMap = new WeakMap()
const obj1map = new Map()
obj1map.set(name, [obj1.obj1NameFn1, obj2.obj1NameFn2])
obj1map.set(age, [obj1.obj1AgeFn1, obj1.obj1AgeFn2])
weakMap.set(obj1, obj1map)

const obj2Map = new Map()
obj2Map.set('name', [obj2NameFn1, obj2NameFn2])
weakMap.set(obj2, obj2Map)

// 如果obj1的name发生改变
obj1.name = 'james'
const targetMap = weakMap.get(obj1)
const fns = targetMap.get('name')
fns.forEach(item => item())
