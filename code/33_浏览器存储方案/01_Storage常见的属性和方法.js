// 1.setItem
localStorage.setItem('name', 'coderwhy')
localStorage.setItem('age', 18)

// 2.key方法
// console.log(localStorage.key(0))

// 3.length
console.log(localStorage.length)
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    console.log(localStorage.getItem(key))
}

// getItem(key)
console.log(localStorage.getItem('age'))//18

// removeItem
localStorage.removeItem('age')

// clear
localStorage.clear()