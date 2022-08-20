const name = 'why'
const age = 18
const height = 1.88

const message = `my name is ${name}`

// 简单计算
const info1 = `doubleAge is ${age * 2}`


// 函数的调用
function doubleAge() {
    return age * 2
}

const info2 = `doubleAge is ${doubleAge()}`
console.log(info1)
console.log(info2)