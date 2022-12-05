function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  const weightGift = packOfGifts.join('').length
  let maxWeightReindeers: number = 0
  reindeers.forEach(
    (reinder: String) => (maxWeightReindeers += reinder.length * 2)
  )
  return Math.floor(maxWeightReindeers / weightGift)
}

const packOfGifts = ['book', 'doll', 'ball']
const reindeers = ['dasher', 'dancer']

distributeGifts(packOfGifts, reindeers) // 2
