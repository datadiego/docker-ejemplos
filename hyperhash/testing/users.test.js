const request = require('supertest');
const express = require('express');
const router = require('../controllers/users');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', router);

describe('GET /users', () => {
    it('responds with json', async () => {
        const response = await request(app).get('/users');
        expect(response.statusCode).toBe(200);
    });
});
