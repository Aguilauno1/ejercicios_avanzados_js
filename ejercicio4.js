function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i // devolvemos la posición
    }
  }
  return -1 // si no lo encuentra
}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

console.log(findArrayIndex(mainCharacters, 'Luke')) // 0
console.log(findArrayIndex(mainCharacters, 'Han Solo')) // 2
console.log(findArrayIndex(mainCharacters, 'Rey')) // 4
console.log(findArrayIndex(mainCharacters, 'Yoda')) // -1 (no está)

function removeItem(array, text) {
  const index = findArrayIndex(array, text)

  if (index !== -1) {
    array.splice(index, 1) // elimina 1 elemento en la posición "index"
  }

  return array
}

// Ejemplos
let characters = [...mainCharacters] // copiamos el array original para no modificarlo

console.log(removeItem(characters, 'Rey'))
// ["Luke", "Leia", "Han Solo", "Chewbacca", "Anakin", "Obi-Wan"]

console.log(removeItem(characters, 'Luke'))
// ["Leia", "Han Solo", "Chewbacca", "Anakin", "Obi-Wan"]

console.log(removeItem(characters, 'Yoda'))
// ["Leia", "Han Solo", "Chewbacca", "Anakin", "Obi-Wan"] (no lo encontró, no cambia nada)
