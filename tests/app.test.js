const request = require('supertest');
const app = require('src/app');

describe('GET /hello', () => {
  it('should respond with Hello, World!', async () => {
    const response = await request(app).get('/hello');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});
