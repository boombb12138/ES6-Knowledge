const names = ['abc', 'cba', 'nba']

let index = 0
const namesIterator = {
    next: function () {

        if (index < names.length) {
            return { done: false, value: names[index++] }
        } else {
            return { done: true, value: undefined }
        }
    }
}

console.log(namesIterator.next())// { done: false, value: abc}
console.log(namesIterator.next())
console.log(namesIterator.next())// { done: false, value:nba }
console.log(namesIterator.next())// { done: true, value: undefined }