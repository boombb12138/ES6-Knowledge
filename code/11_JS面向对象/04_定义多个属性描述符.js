var obj = {
    _age: 18
}

Object.defineProperties(obj, {
    name: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 'why'
    },
    age: {
        configurable: false,
        enumerable: true,
        get: function () {
            return this._age
        },
        set: function (value) {
            this._age = value
        }
    }
})


obj.age = 19
console.log(obj.age)
console.log(obj)
