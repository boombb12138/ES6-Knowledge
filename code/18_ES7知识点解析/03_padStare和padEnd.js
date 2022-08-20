const message = 'Hello World'

const newMessage = message.padStart(15).padEnd(20, '-')

console.log(newMessage)

const cardNumber = '21387487938018308'
const lastFourCard = cardNumber.slice(-4)
const finalCard = lastFourCard.padStart(cardNumber.length, '*')
console.log(finalCard)//*************8308