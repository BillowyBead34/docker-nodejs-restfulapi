const request = require('supertest');
const app = require('../app');

describe('Student endpoint', () => {
  it('should return 5 students from /students', async () => {
    const res = await request(app).get('/students');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(5);
  });
});
