import request from "supertest"
import app from "../app"

test("Should fetch the country data", async () => {
  const res = await request(app).get("/api/v1/country").expect(200)

  expect(res.body).toMatchObject({
    total: 47564296,
    male: 23548056,
    female: 24014716,
    intersex: 1524,
    households: 12143913,
    averageHouseholds: 3.9,
    popDensity: {
      landArea: 9123,
      density: 68,
    },
    populationIn2009: 512690,
    popChange: 108551,
  })
})
