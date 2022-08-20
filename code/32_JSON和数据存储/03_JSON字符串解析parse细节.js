const JSONString = '{"name":"why","age":18,"friends":{"name":"james"}}'

const info = JSON.parse(JSONString, (key, value) => {
    if (key === 'age') {
        return value - 1
    }
    return value
})

console.log(info)

