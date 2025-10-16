/* backend.test.js */ 
import { describe, test, expect, beforeAll } from 'vitest'
import request from 'supertest'

var app

beforeAll(async () => {
  // Dynamically import the CommonJS app into this ESM context
  const imported = await import('../backend/express.cjs')
  app = imported.default || imported // handle possible interop
})

describe('local dummy test', ()=>{
    test('1', ()=>{
        expect(1).toBe(1)
    })
})

describe('Backend', () => {
  test('GET /candies returns initial candies', async () => {
    const res = await request(app).get('/candies')
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body.length).toBe(4)
  })

  test('POST /candy adds a candy', async () => {
    const newCandy = {name: "Test Candy", mass: "50g", origin: "US"}
    const res = await request(app)
      .post('/candy')
      .send(newCandy)
      .set('Content-Type', 'application/json')

    expect(res.status).toBe(201)
    expect(res.body.some(c => c.name === 'Test Candy')).toBe(true)
  })

  test('DELETE /candies clears all candies', async () => {
    const res = await request(app).delete('/candies')
    expect(res.status).toBe(200)

    const getRes = await request(app).get('/candies')
    expect(getRes.body.length).toBe(0)
  })
})