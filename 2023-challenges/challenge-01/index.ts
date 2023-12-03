function findFirstRepeated(gifts: number[]) {
  const repeated = gifts.filter((gift, i) => gifts.indexOf(gift) !== i)
  console.log(repeated)

  return repeated.length > 0 ? repeated[0] : -1
}

const giftIds3 = [2, 1, 3, 5, 3, 2]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 2
