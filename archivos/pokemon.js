const fetch = require('fetch')
( async ()=>{
  const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
  try {
    const data = await fetch(url)
    const response = await data.json()
    console.log(`respuesta api ${response}`)
  } catch (err) {
    console.log(`Error consultando la api ${err}`)
  }
})()
