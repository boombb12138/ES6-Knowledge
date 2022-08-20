const obj = {
    name: 'why',
    age: 18,
    friends: {
        name: 'kobe'
    }
}

// 将obj转成JSON格式
const objString = JSON.stringify(obj)

// 将对象数据存储到localStorage
localStorage.setItem('obj', objString)
console.log(localStorage.getItem('obj'))

// 将JSON数据转成obj
const info = JSON.parse(objString)
console.log(info)