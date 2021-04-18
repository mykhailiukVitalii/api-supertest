import { StatusCodes } from 'http-status-codes';
import * as supertest from 'supertest';
import * as Chance from 'chance';

const chance = new Chance();

describe('Managing books', function () {
    it('/PUT - Update a book', async () => {
        const params = {
            ID: 10,
            title: chance.word({ length: 25 }),
            description: chance.sentence(),
            pageCount: 1000,
            excerpt: chance.paragraph(),
            publishDate: '2020-09-14T18:29:12.39Z',
        };

        const response = await supertest("https://fakerestapi.azurewebsites.net/api/v1")
            .put(`/books/${params.ID}`)
            .send(params)
            .expect(StatusCodes.OK);

        delete params['ID'];

        console.log("Body ", response.body)
        //Check response object
        expect(response.body).toMatchObject(params);
        //Check response previously added excerp
        expect(response.body.excerpt).toEqual(params.excerpt)
    });
});
