var x = {
  foo: 17,
  bar: {
    a: 2,
    b: 7,
  },
}

function parseObject(something) {
  var keys = Object.keys(something)
  for (var i = 0; i < keys.length; i++) {
    if (typeof something[keys[i]] === 'object') parseObject(something[keys[i]])
    else console.log(keys[i] + ' : ' + something[keys[i]])
  }
}
parseObject(x)
