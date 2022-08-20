// 规范
// https://promisesaplus.com/
// function HYPromise() {

// }
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'


// 工具函数
function execFunctionWithCatchError(execFn, value, resolve, reject) {
    try {
        value = execFn(value)
        resolve(value)
    } catch (err) {
        reject(err)
    }
}

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
                    this.onFulfilledFns.forEach(fn => {
                        fn(this.value)
                    })
                })

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
        try {
            executor(resolve, reject)

        } catch (err) {
            reject(err)
        }
    }

    then(onFulfilled, onRejected) {
        onRejected = onRejected || (err => { throw err })
        onFulfilled = onFulfilled || (value => { return value })

        return new Promise((resolve, reject) => {
            if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
                // try {
                //     const value = onFulfilled(this.value)
                //     resolve(value)
                // } catch (err) {
                //     reject(err)
                // }
                execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
            }
            if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
                execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
            }

            if (this.status === PROMISE_STATUS_PENDING) {
                this.onFulfilledFns.push(() => {
                    if (onFulfilled !== undefined) {
                        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
                    }
                })
                this.onRejectedFns.push(() => {
                    execFunctionWithCatchError(onRejected, this.reason, resolve, reject)

                })
            }
        })
    }

    catch(onRejected) {
        this.then(undefined, onRejected)
    }

    finally(onFinally) {
        this.then(() => {
            onFinally()
        }, () => {
            onFinally()
        })
    }
}

const promise = new HYPromise((resolve, reject) => {
    reject(1111)
    // resolve(222)
    // throw new Error('executor Error')
})

promise.then(res => {
    console.log('res1', res)
    return 'aaa'
    // throw new Error('err message')
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log('finally')
})
