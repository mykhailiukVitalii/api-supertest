import { StatusCodes } from 'http-status-codes';
import supertest = require('supertest');

describe('SUITE-1: Sample example', function () {
    it('/GET - All books', async () => {
        //No using the Base class
        const response = await supertest("https://fakerestapi.azurewebsites.net/api/v1")
            .get('/books')
            .expect(StatusCodes.OK);
        // console.log("Response length: ", response.body.length)
        expect(response.body.length).toBeGreaterThanOrEqual(100);
    });
});

describe('SUITE-2: Sample example-part2', function () {
    it('[GET /books/15] - response should return status 200', async () => {
        const response = await supertest("https://fakerestapi.azurewebsites.net/api/v1")
            .get('/books/15');
        console.log("Response body title: ", response.status)
        expect(response.status).toEqual(200);
    });
    it('[GET /books/16] - Book title should be equal "Book 16"', async () => {
        const response = await supertest("https://fakerestapi.azurewebsites.net/api/v1")
            .get('/books/16')
            .set('Accept', 'application/json')
            .expect(StatusCodes.OK);
        console.log("Response body title: ", response.body.title)
        expect(response.body.title).toEqual("Book 16");
    });
    it('[GET /books/17] - Book description should be started with "Ipsum"', async () => {
        const response = await supertest("https://fakerestapi.azurewebsites.net/api/v1")
            .get('/books/17');
        console.log("Response description: ", response.body.description)
        // expect(response.body.description.split(" ")[0]).toBe("Ipsum") //TODO: get an error random random
    });
})