import { StatusCodes } from 'http-status-codes';
import supertest = require('supertest');

describe('Sample example', function () {
    it('/GET - All books', async () => {
        //No using the Base class
        const response = await supertest("https://fakerestapi.azurewebsites.net/api/v1")
            .get('/books')
            .expect(StatusCodes.OK);
        // console.log("Response length: ", response.body.length)
        expect(response.body.length).toBeGreaterThanOrEqual(100);
    });
});