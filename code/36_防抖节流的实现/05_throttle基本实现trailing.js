function throttle(fn, delayTime, options = { leading: true, trailing: true }) {
    let lastTime = 0
    const { leading, trailing } = options

    // 事件触发时 真正执行的函数
    const _throttle = function (...args) {
        let interval = delayTime

        // 获取当前时间触发的时间 
        const nowTime = new Date().getTime()
        if (!leading && lastTime === 0) {
            lastTime = nowTime
        }
        const remainTime = interval - (nowTime - lastTime)
        if (remainTime <= 0) {
            fn.apply(this, args)
            lastTime = nowTime
        }

    }

    return _throttle
}