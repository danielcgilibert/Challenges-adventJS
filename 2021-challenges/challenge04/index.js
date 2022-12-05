// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____

function createXmasTree(height) {
  let result = ''
  for (let i = 0; i < height; i++) {
    for (let b = i; b < height - 1; b++) {
      result += '_'
    }

    for (let c = 0; c <= i * 2; c++) {
      result += '*'
    }

    for (let b = i; b < height - 1; b++) {
      result += '_'
    }

    result += '\n'
  }
  let pata = 4
  for (let b = 0; b < pata - 1; b++) {
    for (let b = 0; b < height - 1; b++) {
      result += '_'
    }

    if (pata === 1) {
      result += '\n'
    }

    result += '#'
  }

  console.log(result)

  return result
}

createXmasTree(5)
