import request from "supertest"
import app from "../app"

test("Should fetch the country data", async () => {
  const res = await request(app).get("/api/v1/country").expect(200)

  expect(res.body).toMatchObject({
    total: 47564296,
    male: 23548056,
    female: 24014716,
    intersex: 1524,
    total_households: 12143913,
    conventional_households: 12043016,
    group_quaters: 100897,
    land_area_sq_km: 580895,
    persons_per_sq_km: 82,
    total_rural: 32732596,
    male_rural: 16195922,
    female_rural: 16535833,
    intersex_rural: 841,
    total_households_rural: 7432249,
    conventional_households_rural: 7379282,
    group_quaters_rural: 52967,
    land_area_sq_km_rural: 573370,
    persons_per_sq_km_rural: 57,
    total_urban: 14831700,
    male_urban: 7352134,
    female_urban: 7478883,
    intersex_urban: 683,
    total_households_urban: 4711664,
    conventional_households_urban: 4663734,
    group_quaters_urban: 47930,
    land_area_sq_km_urban: 7526,
    persons_per_sq_km_urban: 1971,
  })
})
