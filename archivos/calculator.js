const express = require('express');
const app = express();
const port = 3000;

app.get('/add/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 + num2;
  res.send(`El resultado de la suma es: ${result}`);
});

app.get('/subtract/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 - num2;
  res.send(`El resultado de la resta es: ${result}`);
});

app.get('/multiply/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);
  const result = num1 * num2;
  res.send(`El resultado de la multiplicación es: ${result}`);
});

app.get('/divide/:num1/:num2', (req, res) => {
  const num1 = parseFloat(req.params.num1);
  const num2 = parseFloat(req.params.num2);

  if (num2 === 0) {
    res.send('No es posible dividir por cero.');
  } else {
    const result = num1 / num2;
    res.send(`El resultado de la división es: ${result}`);
  }
});

app.listen(port, () => {
  console.log(`La calculadora está corriendo en http://localhost:${port}`);
});
