const obj = {
    name: 'why',
    age: 18,
    friends: {
        name: 'kobe'
    },
    hobbies: ['篮球', '足球'],
    foo: function () {
        console.log('foo func')
    }
}

// 将obj对象的内容放到info变量中
// 1 引用赋值
const info = obj
obj.age = 100
console.log(info.age)//100

// 2 浅拷贝
const info2 = { ...obj }
obj.friends.name = 'james'
console.log(info2.friends.name)//james


// 3 深拷贝
// 通过Stringify和parse
const jsonString = JSON.stringify(obj)
const info3 = JSON.parse(jsonString)
obj.friends.name = 'curry'
console.log(info3.friends.name)
console.log(jsonString)
console.log(info3)
