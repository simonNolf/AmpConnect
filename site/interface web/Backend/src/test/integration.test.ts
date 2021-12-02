
const request = require('supertest');
const server = require("../server")

describe('test d\'intégration GET', function () {

  

  it('should return a 200 status code', async () => {
     const response = await request(server).get('/audio/play');
     expect(response.statusCode).toBe(200);
  });

  it('should return a 200 status code', async () => {
    const response = await request(server).get('/audio/backward');
    expect(response.statusCode).toBe(200);
 });

 it('should return a 200 status code', async () => {
  const response = await request(server).get('/audio/pause');
  expect(response.statusCode).toBe(200);
});

it('should return a 200 status code', async () => {
  const response = await request(server).get('/audio/forward');
  expect(response.statusCode).toBe(200);
});

})


