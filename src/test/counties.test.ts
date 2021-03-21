import request from "supertest"
import app from "../app"

test("Should fetch specific county data", async () => {
  // lowercase
  const res = await request(app).get("/api/v1/counties/nairobi").expect(200)

  expect(res.body).toMatchObject({})
})
