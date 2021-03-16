import express from "express"
import { country } from "../data"

const router = express.Router()

router.get("/", (req, res) => {
  res.send(country)
})

export default router
