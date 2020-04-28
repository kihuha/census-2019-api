const request = require('supertest');
const app = require('../src/app.js')

test('Should fetch all county data', async () => {
    const res = await request(app)
        .get(
            '/api/v1/counties'
        ).expect(200)

    // there are 47 counties in kenya
    expect(res.body.length).toBe(47)
})

test('Should fetch specific county data', async () => {
    // lowercase
    const res = await request(app)
        .get(
            '/api/v1/counties/nairobi'
        ).expect(200)


    expect(res.body).toMatchObject(
        {
            "county": "Nairobi",
            "male": 2192452,
            "female": 2204376,
            "intersex": 245,
            "total": 4397073,
            "households": {
                "number of households": 1506888,
                "average household size": 2.9
            },
            "population density": {
                "land area (Sq. KM)": 703.9,
                "density (Per Sq. KM)": 6247
            }
        }
    )

    //uppercase
    const res2 = await request(app)
        .get(
            '/api/v1/counties/NAIROBI'
        ).expect(200)

    expect(res2.body).toMatchObject(
        {
            "county": "Nairobi",
            "male": 2192452,
            "female": 2204376,
            "intersex": 245,
            "total": 4397073,
            "households": {
                "number of households": 1506888,
                "average household size": 2.9
            },
            "population density": {
                "land area (Sq. KM)": 703.9,
                "density (Per Sq. KM)": 6247
            }
        }
    )

    //mixedcase
    const res3 = await request(app)
        .get(
            '/api/v1/counties/Nairobi'
        ).expect(200)

    expect(res3.body).toMatchObject(
        {
            "county": "Nairobi",
            "male": 2192452,
            "female": 2204376,
            "intersex": 245,
            "total": 4397073,
            "households": {
                "number of households": 1506888,
                "average household size": 2.9
            },
            "population density": {
                "land area (Sq. KM)": 703.9,
                "density (Per Sq. KM)": 6247
            }
        }
    )
})

