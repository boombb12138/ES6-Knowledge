const info = {
    name: 'why',
    friend: {
        name: 'lilei',
        girlFriend: {
            name: 'hmm'
        }
    }
}

// info.friend可能为undefined或者null 
// 写info.friend.girlFriend.name就会报错
console.log(info.friend?.girlFriend?.name)
