function debounce(fn, delayTime, immediate = false) {

    let timer = null
    let isInvoke = false
    const _debounce = function (...args) {
        console.log(this)
        if (timer) clearTimeout(timer)

        if (immediate && !isInvoke) {
            const result = fn.apply(this, args)
            isInvoke = true
        } else {
            timer = setTimeout(() => {
                const result = fn.apply(this, args)
                isInvoke = false
            }, delayTime)
        }
    }

    _debounce.cancel = function () {
        if (timer) clearTimeout(timer)
    }
    return _debounce
}