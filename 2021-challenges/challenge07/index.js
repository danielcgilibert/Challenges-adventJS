// Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

// Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

// La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: 'coca-cola',
      producto2: 'fanta',
      producto3: 'sprite',
    },
  },
  estanteria2: {
    cajon1: 'vacio',
    cajon2: {
      producto1: 'pantalones',
      producto2: 'camiseta', // <- ¡Está aquí!
    },
  },
}

const otroAlmacen = {
  baul: {
    fondo: {
      objeto: 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando',
    },
  },
}

// contains(almacen, 'camiseta') // true
// contains(otroAlmacen, 'gameboy') // false

function contains(store, product) {
  const keys = Object.keys(store)
  let found = false
  keys.forEach((element, i) => {
    if (typeof store[element] === 'object') {
      found = contains(store[element], product)
    } else {
      console.log(store[element], product)
      if (product === store[element]) {
        console.log('Encontrado')
        found = true
      }
    }
  })

  return found
}
console.log(contains(almacen, 'camiseta'))
