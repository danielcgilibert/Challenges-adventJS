function wrapping(gifts: string[]) {
  return gifts.map(gift => {
    return `${'*'.repeat(gift.length)}**\n*${gift}*\n${'*'.repeat(
      gift.length
    )}**`
  })
}

const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)
