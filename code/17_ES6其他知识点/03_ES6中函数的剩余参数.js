function foo(m, n, ...args) {
    console.log(m, n)
    console.log(args)//[ 40, 50, 60 ]
}

foo(20, 30, 40, 50, 60)