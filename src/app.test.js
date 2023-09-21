const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
const routerApp = require('./app')

app.get('/users', async = (req, res) => {
  res.status(200).json({ name: 'john' });
});

describe('supertest example', () => {
  it('demo', async ()=> {
    const result = await request(app)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '15')
      .expect(200)

    expect(result.text).toEqual(JSON.stringify({name: 'john'}))
  })

  it('should store to users', async ()=> {
    const result = await request(routerApp)
      .post('/users')
      .send({ "name" : "andres" , "address": "paris", "age": "10", "uid": "123"})
      .set('Accept', 'application/json')
      .expect(201)

    expect(result.body).toEqual([{ "name" : "andres" , "address": "paris", "age": "10", "uid": "123"}])
  })

  it('should store to userstwo', async ()=> {
    const result = await request(routerApp)
      .post('/userstwo')
      .send({ "name" : "andres" , "address": "paris", "age": "10", "uid": "123"})
      .set('Accept', 'application/json')
      .expect(201)

    expect(result.body).toEqual({message: 'success'})
  })
})

