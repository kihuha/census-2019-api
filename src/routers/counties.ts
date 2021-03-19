import express from "express"
import { pool } from "../dbconn"
// import { counties, subCounties } from "../data"

const router = express.Router()

router.get("/", async (req, res) => {
  const results: any = await pool.query(
    "SELECT * FROM counties ORDER BY CAST(county_code AS int) ASC;"
  )

  return res.status(200).send(results.rows)
})

router.get("/:county", async (req, res) => {
  const results = await pool.query("SELECT * FROM counties WHERE county_search_string=$1;", [
    req.params.county.toUpperCase(),
  ])
  return res.status(200).json(results.rows[0])
})

router.get("/:county/subcounties", async (req, res) => {
  const county = await pool.query("SELECT * FROM counties WHERE county_search_string=$1", [
    req.params.county.toUpperCase(),
  ])

  if (county.rows.length > 0) {
    const results = await pool.query("SELECT * FROM subcounties WHERE county_code = $1", [
      county.rows[0].county_code,
    ])

    return res.status(200).json(results.rows)
  }

  return res.status(404).json({})
})

router.get("/:county/subcounties/:subcounty", async (req, res) => {
  const results = await pool.query("SELECT * FROM subcounties WHERE subcounty_search_string = $1", [
    req.params.subcounty.toUpperCase(),
  ])

  res.status(200).json(results.rows[0])
})

export default router
