const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();

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
})

