import { StatusCodes } from 'http-status-codes';
import * as supertest from 'supertest';
import * as responseBook from '../../response/book.json';

describe('Managing books', function () {
    it('/GET - All books', async () => {
        const response = await supertest("https://fakerestapi.azurewebsites.net/api/v1")
            .get('/books')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(StatusCodes.OK);

        expect(response.body.length).toBeGreaterThanOrEqual(50);
    });

    it('/GET - An specific book', async () => {
        const response = await supertest("https://fakerestapi.azurewebsites.net/api/v1")
            .get('/books/15')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(StatusCodes.OK);

        expect(response.body).toMatchObject(
            expect.objectContaining(responseBook),
        );
    });
});
