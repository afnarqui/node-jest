import fetch from 'node-fetch'

const getPokemon = async () => {
  try {
     const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
     const data = await fetch(url)
     const response = await data.json()
     return response
   } catch (err) {
     console.log(`Error al ejecutar la api ${err}`)
   }
 }

 let clouseresResponse = async () => {
   return  await getPokemon()
 }

 console.log(clouseresResponse().then((res)=> console.log(res).catch((err)=> console.log(err))))
