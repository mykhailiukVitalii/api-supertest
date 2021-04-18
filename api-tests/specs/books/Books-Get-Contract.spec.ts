import { StatusCodes } from 'http-status-codes';
import * as supertest from 'supertest';
import * as responseBook from '../../response/book.json';

describe('Managing books', function () {
    it('/CONTRACT - Check contract of getting books', async () => {
        const response = await supertest("https://fakerestapi.azurewebsites.net/api/v1")
            .get('/books/1')
            .set('Accept', 'application/json')
            .expect(StatusCodes.OK);

        Object.keys(responseBook).forEach((k) =>
            expect(response.body).toHaveProperty(k),
        );
    });
});
