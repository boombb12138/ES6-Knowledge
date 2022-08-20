
function createArrayIterator(arr) {
    let index = 0
    return {
        next: function () {
            if (index < arr.length) {
                return { done: false, value: arr[index++] }
            } else {
                return { done: true, value: undefined }
            }
        }
    }
}

const names = ['abc', 'cba', 'nba']
const nums = [10, 22, 33, 12]
const namesIterator = createArrayIterator(names)
const numIterator = createArrayIterator(nums)

console.log(namesIterator.next())//{ done: false, value: 'abc' }
console.log(namesIterator.next())//{ done: false, value: 'cba }
console.log(namesIterator.next())
console.log(namesIterator.next())