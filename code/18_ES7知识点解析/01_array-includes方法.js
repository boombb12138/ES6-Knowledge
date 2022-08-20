const names = ['abc', 'cba', 'nba', 'mba']

if (names.indexOf('mba') !== -1) {
    console.log('包含mba')
}

if (names.includes('mba')) {
    console.log('包含mba')
}

const result1 = Math.pow(3, 2)
const result2 = 3 ** 3
console.log(result1, result2)