const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('server')
})

app.get('/ruta', (req, res) => {
  res.send('ruta')
})

app.get('/products', (req, res) => {

  const heroes = [
    { name: 'IronMan', team: 'avenger', power: 25},
    { name: 'Batman', team: 'justice', power: 10},
    { name: 'SuperMan', team: 'justicie', power: 99},
    { name: 'IronMan2', team: 'avenger', power: 35},
    { name: 'SuperMan2', team: 'justicia', power: 29}
  ]

  // const teams = { avenger: [], justice: []}

  // heroes.forEach(hero => {
  //   teams[hero.team].push(hero)
  // })
  const result = Object.groupBy(heroes, (heroe) => {
    return heroe.team
  })

  res.json(result)
})

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const data = {
    id: id,
    name: 'producto 1',
    price: 1000,
}
  res.status(200).json(data)
})

app.listen(port, () => {
  console.log('port ' +  port)
});
