import { StatusCodes } from 'http-status-codes';
import * as supertest from 'supertest';
import * as Chance from 'chance';

const chance = new Chance();

describe('Managing books', function () {
    it('/POST - Create new book', async () => {
        const params = {
            title: chance.word({ length: 11 }),
            description: chance.sentence(),
            pageCount: 256,
            excerpt: chance.paragraph(),
            publishDate: new Date().toISOString,
        };
    
        const response = await supertest("https://fakerestapi.azurewebsites.net/api/v1")
            .post('/books')
            .send(params)
            .expect(StatusCodes.OK);
    
        delete params['publishDate'];
    
        console.log("Body ", response.body)
        //Check response object
        expect(response.body).toMatchObject(expect.objectContaining(params));
        //Check response previously added title
        expect(response.body.title).toEqual(params.title)
    });
});
