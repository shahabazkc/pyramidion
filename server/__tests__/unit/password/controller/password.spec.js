const app = require('../../../../lib/app');
const supertest = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

app.initiliaseMiddlewares();
app.initiliaseRouters();
app.intiliaseInvalidRequestHandler();
app.initliaseErrorHandlers();

describe("POST /api/password/check", () => {

    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    })

    test('should send a status code of 400 when password is not passed', async () => {
        const response = await supertest(app).post('/api/password/check').send({
            password: ''
        })
        expect(response.statusCode).toBe(400)
    });

    test('should send a status code of 200 with body requireChanges 5', async () => {
        const response = await supertest(app).post('/api/password/check').send({
            password: 'a'
        })
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            status: true,
            data: {
                requiredChanges: 5
            },
            message: "Process completed"
        });
    });

    test('should send a status code of 200 with body requireChanges 3', async () => {
        const response = await supertest(app).post('/api/password/check').send({
            password: 'aA1'
        })
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            status: true,
            data: {
                requiredChanges: 3
            },
            message: "Process completed"
        });
    });

    test('should send a status code of 200 with body requireChanges 0', async () => {
        const response = await supertest(app).post('/api/password/check').send({
            password: '1337C0d3'
        })
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            status: true,
            data: {
                requiredChanges: 0
            },
            message: "Process completed"
        });
    });

    test('should send a status code of 200 with body requireChanges 1', async () => {
        const response = await supertest(app).post('/api/password/check').send({
            password: '12345666023245623dD1'
        })
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            status: true,
            data: {
                requiredChanges: 1
            },
            message: "Process completed"
        });
    });

    test('should send a status code of 200 when password is strong', async () => {
        const response = await supertest(app).post('/api/password/check').send({
            password: 'helloD1'
        })
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({
            status: true,
            data: {
                requiredChanges: 0
            },
            message: "Process completed"
        });
    });

})
