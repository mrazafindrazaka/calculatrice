const app = require('./server')
const supertest = require('supertest')
const request = supertest(app)

test('Test result endpoint', async () => {
    const response = await request.post('/').send({
        calculate: '-48/2*4*12/8'
    })
    expect(response.status).toBe(200)
    expect(response.body.result).toBe('-144')
})
