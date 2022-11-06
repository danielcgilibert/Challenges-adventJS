function listGifts(letter) {
  // ¡Tú puedes!
  const regalosArray = letter.trim().split(' ')
  let gift = {}
  for (let i = 0; i < regalosArray.length; i++) {
    let counter = 0
    for (let b = 0; b < regalosArray.length; b++) {
      if (
        regalosArray[i] === regalosArray[b] &&
        regalosArray[i].charAt(0) !== '_'
      ) {
        counter++
        gift[regalosArray[i]] = counter
      }
    }
  }

  return gift
}
