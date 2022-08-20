const info = {
    name: 'why',
    friend: {
        name: 'kobe'
    }
}

const obj = { ...info, name: 'coderwhy' }
obj.friend.name = 'james'

console.log(info.friend.name)//james