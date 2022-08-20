// 规范
// https://promisesaplus.com/
// function HYPromise() {

// }
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'


class HYPromise {

    constructor(executor) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledFns = []
        this.onRejectedFns = []

        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_FULFILLED

                    this.value = value
                    console.log('resolve被调用了')
                    this.onFulfilledFns.forEach(fn => {
                        fn(this.value)
                    })
                })

                console.log('=====')
            }
        }
        const reject = (reason) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_REJECTED

                    this.reason = reason
                    console.log('reject被调用了')
                    this.onRejectedFns.forEach(fn => {
                        fn(this.reason)
                    })
                })
            }
        }

        executor(resolve, reject)
    }

    then(onFulfilled, onRejected) {
        return new Promise((resolve, reject) => {
            if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
                try {
                    const value = onFulfilled(this.value)
                    resolve(value)
                } catch (err) {
                    reject(err)
                }
            }
            if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
                try {
                    const reason = onRejected(this.reason)
                    resolve(reason)
                } catch (err) {
                    reject(err)
                }
            }

            if (this.status === PROMISE_STATUS_PENDING) {
                this.onFulfilledFns.push(() => {
                    try {
                        const value = onFulfilled(this.value)
                        resolve(value)
                    } catch (err) {
                        reject(err)
                    }
                })
                this.onRejectedFns.push(() => {
                    try {
                        const reason = onRejected(this.reason)
                        resolve(reason)
                    } catch (err) {
                        reject(err)
                    }
                })
            }
        })
    }
}

const promise = new HYPromise((resolve, reject) => {
    // reject(1111)
    resolve(222)
})

// 下面开始调用then方法
console.log('========')

promise.then((res) => {
    console.log('res1', res)
}, (err) => {
    console.log('err1', err)
    return 'bbb'
})

promise.then((res) => {
    console.log('res2', res)
}, (err) => { console.log('err2', err) })


setTimeout(() => {
    promise.then((res) => {
        console.log('SETTIMEOUT', res)
    }, (err) => {
        console.log(err)
    })
}, 1000);