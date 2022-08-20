function calArea(foo) {
    console.log(foo.getArea())
}

var obj1 = {
    getArea: function () {
        return 1000
    }
}

class Person {
    getArea() {
        return 100
    }
}

var p1 = new Person()

calArea(obj1)
calArea(p1)