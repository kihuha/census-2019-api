const request = require('supertest');
const app = require('../src/app.js')

test('Should fetch the country data', async () => {
    const res = await request(app)
        .get(
            '/api/v1/country'
        ).expect(200)

    expect(res.body).toMatchObject(
        {
            "total": 47564296,
            "male": 23548056,
            "female": 24014716,
            "intersex": 1524,
            "households": {
                "number of households": 12143913,
                "average household size": 3.9
            },
            "landArea": 9123,
            "population_Density": 68,
            "populationIn2009": 512690,
            "popChange": 108551

        }
    )
})

