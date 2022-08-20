function debounce(fn, delayTime, immediate = false) {

    let timer = null
    let isInvoke = false
    const _debounce = function (...args) {
        console.log(this)
        if (timer) clearTimeout(timer)

        if (immediate && !isInvoke) {
            fn.apply(this, args)
            isInvoke = true
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args)
                isInvoke = false
            }, delayTime)
        }


    }
    return _debounce
}