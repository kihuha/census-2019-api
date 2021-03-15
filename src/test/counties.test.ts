import request from "supertest"
import app from "../app"

test("Should fetch all county data", async () => {
  const res = await request(app).get("/api/v1/counties").expect(200)

  // there are 47 counties in kenya
  expect(res.body.length).toBe(47)
})

test("Should fetch specific county data", async () => {
  // lowercase
  const res = await request(app).get("/api/v1/counties/nairobi").expect(200)

  expect(res.body).toMatchObject({
    male: 2192452,
    female: 2204376,
    intersex: 245,
    total: 4397073,
    households: 1506888,
    averageHouseholds: 2.9,
    popDensity: {
      landArea: 703.9,
      density: 6247,
    },
  })

  //uppercase
  const res2 = await request(app).get("/api/v1/counties/NAIROBI").expect(200)

  expect(res2.body).toMatchObject({
    male: 2192452,
    female: 2204376,
    intersex: 245,
    total: 4397073,
    households: 1506888,
    averageHouseholds: 2.9,
    popDensity: {
      landArea: 703.9,
      density: 6247,
    },
  })

  //mixedcase
  const res3 = await request(app).get("/api/v1/counties/Nairobi").expect(200)

  expect(res3.body).toMatchObject({
    male: 2192452,
    female: 2204376,
    intersex: 245,
    total: 4397073,
    households: 1506888,
    averageHouseholds: 2.9,
    popDensity: {
      landArea: 703.9,
      density: 6247,
    },
  })
})
