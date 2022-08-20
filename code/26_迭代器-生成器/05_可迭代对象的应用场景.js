// 1 for of场景

// 2 展开语法
const iterableObj = {
    names: ['abc', 'cba', 'nba'],

    [Symbol.iterator]: function () {
        let index = 0
        return {
            next: () => {

                if (index < this.names.length) {
                    return { done: false, value: this.names[index++] }
                } else {
                    return { done: true, value: undefined }
                }
            }
        }
    }
}

const names = ['abc', 'cba', 'nba']
const newNames = [...names, ...iterableObj]
console.log(newNames)

const obj = {
    name: 'why',
    age: 18
}
// ES9新增的一个特性 用的不是迭代器
const newObj = { ...obj }
console.log(newObj)

// 3 解构语法
const [name1, name2, name3] = names
console.log(name2)
console.log(name3)

// 4 创建一些其他对象时
const set1 = new Set(iterableObj)
const set2 = new Set(names)

const arr1 = Array.from()
