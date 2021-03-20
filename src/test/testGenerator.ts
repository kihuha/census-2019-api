import path from "path"
import fs from "fs"
import { rawCounties } from "../data/raw/rawCounties"
// import { rawSubcounties } from "./raw/rawSubcounties"

const results = rawCounties.map((county: any) => {
  const expectedResult = {
    county_code: county.county_code,
    county_name: county.county,
    total: Number(county.total.replace(/,/g, "").replace(/ /g, "")),
    male: Number(county.male.replace(/,/g, "").replace(/ /g, "")),
    female: Number(county.female.replace(/,/g, "").replace(/ /g, "")),
    intersex: Number(county.intersex.replace(/,/g, "").replace(/ /g, "")),
    total_households: Number(county.total_households.replace(/,/g, "").replace(/ /g, "")),
    conventional_households: Number(
      county.conventional_households.replace(/,/g, "").replace(/ /g, "")
    ),
    group_quaters: Number(county.group_quaters.replace(/,/g, "").replace(/ /g, "")),
    land_area_sq_km: Number(county.land_area_sq_km.replace(/,/g, "").replace(/ /g, "")),
    persons_per_sq_km: Number(county.persons_per_sq_km.replace(/,/g, "").replace(/ /g, "")),
    total_rural: Number(county.total_rural.replace(/,/g, "").replace(/ /g, "")),
    male_rural: Number(county.male_rural.replace(/,/g, "").replace(/ /g, "")),
    female_rural: Number(county.female_rural.replace(/,/g, "").replace(/ /g, "")),
    intersex_rural: Number(county.intersex_rural.replace(/,/g, "").replace(/ /g, "")),
    total_households_rural: Number(
      county.total_households_rural.replace(/,/g, "").replace(/ /g, "")
    ),
    conventional_households_rural: Number(
      county.conventional_households_rural.replace(/,/g, "").replace(/ /g, "")
    ),
    group_quaters_rural: Number(county.group_quaters_rural.replace(/,/g, "").replace(/ /g, "")),
    land_area_sq_km_rural: Number(county.land_area_sq_km_rural.replace(/,/g, "").replace(/ /g, "")),
    persons_per_sq_km_rural: Number(
      county.persons_per_sq_km_rural.replace(/,/g, "").replace(/ /g, "")
    ),
    total_urban: Number(county.total_urban.replace(/,/g, "").replace(/ /g, "")),
    male_urban: Number(county.male_urban.replace(/,/g, "").replace(/ /g, "")),
    female_urban: Number(county.female_urban.replace(/,/g, "").replace(/ /g, "")),
    intersex_urban: Number(county.intersex_urban.replace(/,/g, "").replace(/ /g, "")),
    total_households_urban: Number(
      county.total_households_urban.replace(/,/g, "").replace(/ /g, "")
    ),
    conventional_households_urban: Number(
      county.conventional_households_urban.replace(/,/g, "").replace(/ /g, "")
    ),
    group_quaters_urban: Number(county.group_quaters_urban.replace(/,/g, "").replace(/ /g, "")),
    land_area_sq_km_urban: Number(county.land_area_sq_km_urban.replace(/,/g, "").replace(/ /g, "")),
    persons_per_sq_km_urban: Number(
      county.persons_per_sq_km_urban.replace(/,/g, "").replace(/ /g, "")
    ),
  }
})

const endpoints = rawCounties.map((county: any) => {
  return `/api/v1/counties/${county.county
    .replace(/'/g, "")
    .replace(/ /g, "-")
    .replace(/\//g, "-")}`
})

const endpointsLowerCase = rawCounties.map((county: any) => {
  return `/api/v1/counties/${county.county
    .replace(/'/g, "")
    .replace(/ /g, "-")
    .replace(/\//g, "-")
    .toLowerCase()}`
})

export { results, endpoints, endpointsLowerCase }
