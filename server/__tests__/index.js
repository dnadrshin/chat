const
    app = require('../app'),
    request = require('supertest');

describe('Test', () => {
    it('work ok', () => {
        expect(true).toBeTruthy()
    })
})

describe('Test the root path', () => {
    it('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});