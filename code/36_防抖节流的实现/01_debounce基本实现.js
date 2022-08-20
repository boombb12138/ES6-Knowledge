function debounce(fn, delayTime) {

    let timer = null

    const _debounce = function (...args) {
        console.log(this)
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delayTime)
    }
    return _debounce
}