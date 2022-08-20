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
// iterableObj就是一个可迭代对象 

// const iterator = iterableObj[Symbol.iterator]()
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// const iterator2 = iterableObj[Symbol.iterator]()
// console.log(iterator2.next())
// console.log(iterator2.next())
// console.log(iterator2.next())
// console.log(iterator2.next())

for (item of iterableObj) {
    console.log(item)
}