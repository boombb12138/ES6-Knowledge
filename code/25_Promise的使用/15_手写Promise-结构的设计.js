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


        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                this.value = value
                console.log('resolve被调用了')
                this.status = PROMISE_STATUS_FULFILLED
            }
        }
        const reject = (reason) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                this.reason = reason
                console.log('reject被调用了')
                this.status = PROMISE_STATUS_REJECTED
            }
        }

        executor(resolve, reject)
    }
}

const promise = new HYPromise((resolve, reject) => {
    resolve(1111)
})

promise.then(res => {

})