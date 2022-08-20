// 对数组的去重
const arr = [33, 12, 13, 11, 12, 33]
// 生成Set结构
const arrSet = new Set(arr)
// 转成数组
// 法1
// const newArr = Array.from(arrSet)
// 法2
console.log(arrSet)
const newArr = [...arrSet]
console.log(newArr)

// size属性

// set的方法
// 添加元素
arrSet.add(100)
// 删除某个元素
arrSet.delete(12)//将元素作为参数
// 判断是否包含
console.log(arrSet.has(100))
// 清除
// arrSet.clear()
// 遍历
//forEach
arrSet.forEach(item => {
    console.log(item)
})
//for of 
for (item of arrSet) {
    console.log(item)
}
