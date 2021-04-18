import { StatusCodes } from 'http-status-codes';
import * as supertest from 'supertest';

describe('Managing books', function () {
    it('/DELETE - Remove a book with id=99', async () => {
        const response = await supertest("https://fakerestapi.azurewebsites.net/api/v1")
            .delete(`/books/99`)
            .expect(StatusCodes.OK);
        console.log("Del ", response.body)
        expect(response.body).toMatchObject({});
    });
});
