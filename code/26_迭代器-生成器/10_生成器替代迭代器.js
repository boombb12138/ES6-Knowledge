
// 1 生成器替代迭代器
// 生成器的写法比迭代器简洁 所以要多用生成器
// function* createArrayIterator(arr) {
//    第二种写法
// for (const item of arr) {
//     yield item
// }
//    第一种写法
// let index = 0
// yield arr[index++]
// yield arr[index++]
// yield arr[index++]

// 第三种写法
//     yield* arr
// }

// const names = ['abc', 'cba', 'nba']
// const namesIterator = createArrayIterator(names)

// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())
// console.log(namesIterator.next())

// 2 
// function* createRangeIterator(start, end) {
//     let index = start
//     while (index < end) {
//         yield index++
//     }

// return {
//     next: function () {
//         if (index < end) {
//             return { done: false, value: index++ }
//         } else {
//             return { done: true, value: undefined }
//         }
//     }
// }
// }

// const rangeIterator = createRangeIterator(10, 20)
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())
// console.log(rangeIterator.next())

// 3
class Classroom {
    constructor(address, name, students) {
        this.address = address
        this.name = name
        this.students = students
    }

    entry(newStudent) {
        this.students.push(newStudent)
    }

    foo = () => {

    }

    [Symbol.iterator] = function* () {
        yield* this.students
    }
}

const classroom = new Classroom('3栋5楼205', '计算机教室', ['james', 'kobe', 'curry', 'why'])
for (const item of classroom) {
    console.log(item)
}