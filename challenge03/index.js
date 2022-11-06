function isValid(letter) {
  // ¡No dejes que el Grinch gane
  let valid = true

  const gifts = letter.split(' ')

  for (let gift of gifts) {
    if (gift.startsWith('(')) {
      if (!gift.endsWith(')')) {
        valid = false
        break
      }
      let letter = gift.split('')
      letter.shift()
      letter.pop()

      if (letter.length === 0) {
        valid = false
        break
      }

      for (let l of letter) {
        if (l === '[' || l === '{' || l === '(' || l === ')') {
          valid = false
          break
        }
      }
    }

    if (gift.startsWith(')')) {
      valid = false
      break
    }
  }

  return valid
}
