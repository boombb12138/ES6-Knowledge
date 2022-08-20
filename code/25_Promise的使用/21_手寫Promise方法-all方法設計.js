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

    static resolve(value) {
        return new HYPromise((resolve) => {
            resolve(value)
        })
    }

    static reject(reason) {
        return new HYPromise((resolve, reject) => {
            reject(reason)
        })
    }

    static all(promises) {
        return new Promise((resolve, reject) => {
            let values = []
            promises.forEach(promise => {
                promise.then(res => {
                    values.push(res)
                    if (values.length === promises.length) {
                        resolve(values)
                    }
                }, err => {
                    reject(err)
                })
            })
        })
    }

    static allSettled(promises) {
        return new HYPromise((resolve) => {
            const results = []
            promises.forEach(promise => {
                promise.then(res => {
                    results.push({ status: PROMISE_STATUS_FULFILLED, value: res })
                    if (results.length === promises.length) {
                        resolve(results)
                    }
                }, err => {
                    results.push({ status: PROMISE_STATUS_REJECTED, reason: err })
                    if (results.length === promises.length) {
                        resolve(results)
                    }
                })
            })
        })
    }

    static race(promises) {
        return new HYPromise((resolve, reject) => {
            promises.forEach(promise => {
                promise.then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
                // promise.then(resolve, reject)
            })
        })
    }


    static any(promises) {
        //情况1 必须等到有一个成功的 才会执行resolve
        //情况2 所有的都是reject 才会执行reject
        const reasons = []
        return new HYPromise((resolve, reject) => {
            promises.forEach(promise => {
                promise.then(res => {
                    resolve(res)
                }, err => {
                    reasons.push(err)
                    if (reasons.length === promises.length) {
                        reject(new AggregateError(reasons))
                    }
                })
            })
        })
    }
}

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(111)
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(222)
    }, 2000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(333)
    }, 3000);
})

// HYPromise.all([p1, p2, p3]).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

// HYPromise.allSettled([p1, p2, p3]).then(res => {
//     console.log(res)
// })

// HYPromise.race([p1, p2, p3]).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })

HYPromise.any([p1, p2, p3]).then(res => {
    console.log(res)
}, err => {
    console.log(err)
})