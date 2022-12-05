function maxProfit(prices) {
  let bestPriceToBuy = Math.min(...prices.slice(0, prices.length - 1))
  let bestPriceToSell = Math.max(...prices.slice(1, prices.length))

  if (prices.indexOf(bestPriceToSell) < prices.indexOf(bestPriceToBuy)) {
    return -1
  }
  if (bestPriceToBuy >= bestPriceToSell) {
    return -1
  }

  return bestPriceToSell - bestPriceToBuy
}

const pricesEth = [6, 5, 4, 3]
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
