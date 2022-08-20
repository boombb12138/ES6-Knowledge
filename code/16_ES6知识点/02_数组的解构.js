var names = ['cba', 'abc', 'nba']

var [item1, item2, item3] = names

console.log(item1)
console.log(item2)
console.log(item3)

var [itemx, ...newNames] = names
console.log(itemx, newNames)

// 解构的默认值
var [itema, itemb, itemc, itemd = 'why'] = names
console.log(itemd)