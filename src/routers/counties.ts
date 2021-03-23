import express from "express"
import { counties, subcounties } from "../data"
import { Map } from "immutable"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const allCounties = counties
      .toArray()
      .map((item: Map<string, string | number>) => item.toObject())

    console.log(typeof counties.toArray())

    return res.status(200).send(allCounties)
  } catch (e) {
    console.log(e)
    return res.status(500).send({
      status: "Server Error",
    })
  }
})

router.get("/:county", async (req, res) => {
  try {
    const selectedCounty = counties.find((obj: Map<string, string>) => {
      return obj.get("county_search_string")?.toUpperCase() === req.params.county.toUpperCase()
    })

    if (selectedCounty) {
      return res.status(200).send(selectedCounty.toObject())
    } else {
      return res.status(404).send({
        message: "County not found",
      })
    }
  } catch (e) {
    console.log(e)
    return res.status(500).send({
      status: "Server Error",
    })
  }
})

router.get("/:county/subcounties", async (req, res) => {
  try {
    const allSubCounties = subcounties
      .filter(
        (obj: Map<string, string>) =>
          obj.get("county")?.toUpperCase() === req.params.county.toUpperCase()
      )
      .map((item: Map<string, string | number>) => item.toObject())

    if (allSubCounties) {
      return res.status(200).send(allSubCounties.toArray())
    } else {
      return res.status(404).json({})
    }
  } catch (e) {
    return res.status(500).send({
      status: "Server Error",
    })
  }
})

router.get("/:county/subcounties/:subcounty", async (req, res) => {
  try {
    const selectedSubCounty = subcounties.find(
      (obj: Map<string, string>) =>
        obj.get("subcounty_search_string")?.toUpperCase() === req.params.subcounty.toUpperCase()
    )

    if (selectedSubCounty) {
      return res.status(200).send(selectedSubCounty.toObject())
    } else {
      return res.status(404).json({})
    }
  } catch (e) {
    return res.status(500).send({
      status: "Server Error",
    })
  }
})

export default router
