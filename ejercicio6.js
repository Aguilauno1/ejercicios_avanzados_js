function swap(array, index1, index2) {
  // guardamos el valor del primero en una variable temporal
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp

  return array
}

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

console.log(swap(fantasticFour, 0, 2))
// ["La mujer invisible", "Mr. Fantástico", "La antorcha humana", "La cosa"]

console.log(swap(fantasticFour, 1, 3))
// ["La mujer invisible", "La cosa", "La antorcha humana", "Mr. Fantástico"]
