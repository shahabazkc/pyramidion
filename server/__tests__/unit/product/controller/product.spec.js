const app = require('../../../../lib/app');
const supertest = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

app.initiliaseMiddlewares();
app.initiliaseRouters();
app.intiliaseInvalidRequestHandler();
app.initliaseErrorHandlers();

describe("POST /api/products/", () => {

    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    })

    test('should send a status code of 400 when empty object passed on body', async () => {
        const response = await supertest(app).post('/api/products').send({})
        expect(response.statusCode).toBe(400)
    });

    test('should send a status code of 200', async () => {
        const response = await supertest(app).post('/api/products').send({
            "name": "LuxeSeat Chair",
            "category": "Home Furniture",
            "description": "Experience ultimate comfort and support with the ErgoBliss Chair. Designed with cutting-edge ergonomic technology, this chair provides optimal lumbar support and promotes a healthy sitting posture. Its plush memory foam cushioning adapts to your body shape, ensuring a cozy seating experience during long hours of work or relaxation. The sleek and modern design of the chair complements any interior decor, making it a perfect addition to your home or office. Upgrade your seating comfort with the ErgoBliss Chair today!",
            "short_description": "Revolutionary Comfort",
            "seller": "Amit Traders",
            "price": 100
        })
        expect(response.statusCode).toBe(200);
    });

    test('should send a status code of 400 with response name required', async () => {
        const response = await supertest(app).post('/api/products').send({
            "category": "Home Furniture",
            "description": "Experience ultimate comfort and support with the ErgoBliss Chair. Designed with cutting-edge ergonomic technology, this chair provides optimal lumbar support and promotes a healthy sitting posture. Its plush memory foam cushioning adapts to your body shape, ensuring a cozy seating experience during long hours of work or relaxation. The sleek and modern design of the chair complements any interior decor, making it a perfect addition to your home or office. Upgrade your seating comfort with the ErgoBliss Chair today!",
            "short_description": "Revolutionary Comfort",
            "seller": "Amit Traders",
            "price": 100
        })
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({
            "status": 400,
            "message": "name should be exist"
        });
    });

    test('should send a status code of 400 with response category required', async () => {
        const response = await supertest(app).post('/api/products').send({
            "name": "LuxeSeat Chair",
            "description": "Experience ultimate comfort and support with the ErgoBliss Chair. Designed with cutting-edge ergonomic technology, this chair provides optimal lumbar support and promotes a healthy sitting posture. Its plush memory foam cushioning adapts to your body shape, ensuring a cozy seating experience during long hours of work or relaxation. The sleek and modern design of the chair complements any interior decor, making it a perfect addition to your home or office. Upgrade your seating comfort with the ErgoBliss Chair today!",
            "short_description": "Revolutionary Comfort",
            "seller": "Amit Traders",
            "price": 100
        })
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({
            "status": 400,
            "message": "category should be exist"
        });
    });
})
