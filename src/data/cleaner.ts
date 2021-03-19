import path from "path"
import fs from "fs"
import { rawCounties } from "./raw/rawCounties"

const clean = rawCounties.slice(0).map((county: any) => {
  return {
    county_code: county.county_code,
    county_name: county.county,
    total: Number(county.total.replace(/,/g, "").replace(/ /g, "")),
    male: Number(county.male.replace(/,/g, "").replace(/ /g, "")),
    female: Number(county.female.replace(/,/g, "").replace(/ /g, "")),
    intersex: Number(county.intersex.replace(/,/g, "").replace(/ /g, "")),
    total_households: Number(
      county.total_households.replace(/,/g, "").replace(/ /g, "")
    ),
    conventional_households: Number(
      county.conventional_households.replace(/,/g, "").replace(/ /g, "")
    ),
    group_quaters: Number(
      county.group_quaters.replace(/,/g, "").replace(/ /g, "")
    ),
    land_area_sq_km: Number(
      county.land_area_sq_km.replace(/,/g, "").replace(/ /g, "")
    ),
    persons_per_sq_km: Number(
      county.persons_per_sq_km.replace(/,/g, "").replace(/ /g, "")
    ),
    total_rural: Number(county.total_rural.replace(/,/g, "").replace(/ /g, "")),
    male_rural: Number(county.male_rural.replace(/,/g, "").replace(/ /g, "")),
    female_rural: Number(
      county.female_rural.replace(/,/g, "").replace(/ /g, "")
    ),
    intersex_rural: Number(
      county.intersex_rural.replace(/,/g, "").replace(/ /g, "")
    ),
    total_households_rural: Number(
      county.total_households_rural.replace(/,/g, "").replace(/ /g, "")
    ),
    conventional_households_rural: Number(
      county.conventional_households_rural.replace(/,/g, "").replace(/ /g, "")
    ),
    group_quaters_rural: Number(
      county.group_quaters_rural.replace(/,/g, "").replace(/ /g, "")
    ),
    land_area_sq_km_rural: Number(
      county.land_area_sq_km_rural.replace(/,/g, "").replace(/ /g, "")
    ),
    persons_per_sq_km_rural: Number(
      county.persons_per_sq_km_rural.replace(/,/g, "").replace(/ /g, "")
    ),
    total_urban: Number(county.total_urban.replace(/,/g, "").replace(/ /g, "")),
    male_urban: Number(county.male_urban.replace(/,/g, "").replace(/ /g, "")),
    female_urban: Number(
      county.female_urban.replace(/,/g, "").replace(/ /g, "")
    ),
    intersex_urban: Number(
      county.intersex_urban.replace(/,/g, "").replace(/ /g, "")
    ),
    total_households_urban: Number(
      county.total_households_urban.replace(/,/g, "").replace(/ /g, "")
    ),
    conventional_households_urban: Number(
      county.conventional_households_urban.replace(/,/g, "").replace(/ /g, "")
    ),
    group_quaters_urban: Number(
      county.group_quaters_urban.replace(/,/g, "").replace(/ /g, "")
    ),
    land_area_sq_km_urban: Number(
      county.land_area_sq_km_urban.replace(/,/g, "").replace(/ /g, "")
    ),
    persons_per_sq_km_urban: Number(
      county.persons_per_sq_km_urban.replace(/,/g, "").replace(/ /g, "")
    ),
  }
})

const keys = Object.keys(clean[0])
const values = clean.map((county) => {
  const values = Object.values(county)
  return `('${values[0]}', '${values[1]}', ${values.slice(2)} )`
})

const query = `INSERT INTO counties (${keys.join(",")}) VALUES ${values.join(
  ","
)};`

fs.writeFileSync(
  path.resolve(__dirname, "../../src/data/sql/counties.sql"),
  query
)
