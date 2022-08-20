// // 1 flat
// const nums = [10, 20, [2, 9], [[30, 40], [10, 45]], 78, [55, 88]]
// const newNums = nums.flat()
// console.log(newNums)


// const newNums = nums.flat(2)
// console.log(newNums)

//2 flatMap
const nums2 = [10, 20, 30]
const newNums = nums2.flatMap(item => {
    return item * 2
})

console.log(newNums)



const message = ['Hello World', 'hello lyh', 'my name is coderwhy']
const words = message.flatMap(item => {
    return item.split("")
    // flatMap会将'Hello World'转为['Hello', 'World'] 再降维
})
console.log(words)