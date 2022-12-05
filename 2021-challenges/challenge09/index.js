function groupBy(collection, it) {
  console.log(typeof collection[0])
  const type = typeof collection[0]
  switch (type) {
    case 'number':
      break
    case 'string':
      break
    case 'object':
      break
    default:
      break
  }
  return {}
}

groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
// groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
// groupBy([{ age: 23 }, { age: 24 }], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

// groupBy([1397639141184, 1363223700000], timestamp =>
//   new Date(timestamp).getFullYear()
// )
