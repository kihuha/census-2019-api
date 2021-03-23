import express from "express"
import country from "./routers/country"
import counties from "./routers/counties"

const app = express()

app.get("/", async (req, res) => {
  return res.json({ test: "Server is running" })
})

app.use("/api/v1/country", country)

app.use("/api/v1/counties", counties)

export default app
