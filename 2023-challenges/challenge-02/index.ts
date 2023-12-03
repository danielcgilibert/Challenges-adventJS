function manufacture(gifts: string[], materials: string) {
  // Code here
  const giftsCanManufactured: string[] = []
  gifts.forEach((gift) => {
    const findedLetter = gift
      .split('')
      .map((letter) => materials.split('').includes(letter))

    if (findedLetter.every((l) => l)) {
      giftsCanManufactured.push(gift)
    }
  })
  return giftsCanManufactured
}
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
