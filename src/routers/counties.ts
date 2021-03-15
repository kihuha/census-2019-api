import express from "express"
import { counties, subCounties } from "../data"

const router = express.Router()

router.get("/", (req, res) => {
  res.status(200).json(counties)
})

/**
 * This function takes in either the counties object or
 * the subcounties object and returns a single county or subcounty from
 * the object passed in
 *
 * @param name string
 * @param object Counties or SubCounties object
 * @returns County or Subcounty
 */
const getData = (name: string, object: any) => {
  const county =
    name[0].toUpperCase() + name.slice(1, name.length).toLowerCase()

  if (county.split("-").length > 1) {
    const split = county.split("-")
    const searchString = `${split[0]} ${split[1]}`

    return object[searchString]
  } else {
    return object[county]
  }
}

router.get("/:county", (req, res) => {
  const response = getData(req.params.county, counties) || {
    error: "County not found",
  }

  res.status(200).json(response)
})

router.get("/:county/subcounties", (req, res) => {
  const data = getData(req.params.county, subCounties)

  const response = data || { error: "County not found" }

  res.status(200).json(response)
})

router.get("/:county/subcounties/:subcounty", (req, res) => {
  const data = getData(req.params.county, subCounties)
  const result = getData(req.params.subcounty, data)

  const response = result || { error: "Sub County not found" }

  res.status(200).json(response)
})

export default router
