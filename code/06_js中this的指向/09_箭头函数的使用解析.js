// 如果函数执行体只有一行代码 那么｛｝可以省略
// 并且它会默认将这行代码的执行结果作为函数的返回值返回

nums.forEach(item => console.log(item))

var newNums = nums.filter(item => item % 2 === 0)
console.log(newNums)

// 如果一个箭头函数的函数执行体只有1行 并且返回一个对象 
var bar = () => ({ name: 'why', age: 18 })