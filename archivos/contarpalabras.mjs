
const normalize = (word) => {
  return word.toLowerCase().replace(',','').replace('.','')
  // '/[.,!;]/g',''
}

const wordRepetitions = (text) => {
  let dict = {}
  let separatedWords = text.split(" ")

  for( let word of separatedWords) {
    if(normalize(word) in dict) {
      ++dict[normalize(word)]
    } else {
      dict[normalize(word)] = 1
    }
  }
  console.log(dict)
}

wordRepetitions('hola que tal como vas, usted que hola')
