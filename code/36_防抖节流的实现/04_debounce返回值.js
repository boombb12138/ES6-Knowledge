function debounce(fn, delayTime, immediate = false) {

    let timer = null
    let isInvoke = false
    const _debounce = function (...args) {
        return new Promise((resolve, reject) => {
            if (timer) clearTimeout(timer)

            if (immediate && !isInvoke) {
                const result = fn.apply(this, args)
                resolve(result)
                isInvoke = true
            } else {
                timer = setTimeout(() => {
                    const result = fn.apply(this, args)
                    resolve(result)
                    isInvoke = false
                }, delayTime)
            }
        })
    }

    _debounce.cancel = function () {
        if (timer) clearTimeout(timer)
    }
    return _debounce
}