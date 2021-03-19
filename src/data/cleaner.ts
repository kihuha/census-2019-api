import path from "path"
import fs from "fs"
// import { rawCounties } from "./raw/rawCounties"
import { rawSubcounties } from "./raw/rawSubcounties"

const clean = rawSubcounties.map((subcounty) => {
  return {
    county_code: Number(subcounty.county_code),
    subcounty_code: Number(subcounty.subcounty_code),
    subcounty_search_string: subcounty.subcounty.replace(/'/g, "").replace(/ /g, "-"),
    subcounty: subcounty.subcounty.replace(/'/g, "''"),
    total: Number(subcounty.total.replace(/,/g, "").replace(/ /g, "")) || 0,
    male: Number(subcounty.male.replace(/,/g, "").replace(/ /g, "")) || 0,
    female: Number(subcounty.female.replace(/,/g, "").replace(/ /g, "")) || 0,
    total_households: Number(subcounty.total_households.replace(/,/g, "").replace(/ /g, "")) || 0,
    conventional_households:
      Number(subcounty.conventional_households.replace(/,/g, "").replace(/ /g, "")) || 0,
    group_quaters: Number(subcounty.group_quaters.replace(/,/g, "").replace(/ /g, "")) || 0,
    land_area_sq_km: Number(subcounty.land_area_sq_km.replace(/,/g, "").replace(/ /g, "")) || 0,
    persons_per_sq_km: Number(subcounty.persons_per_sq_km.replace(/,/g, "").replace(/ /g, "")) || 0,
  }
})

const keys = Object.keys(clean[0])
const values = clean.map((subcounties) => {
  const values = Object.values(subcounties)
  return `(${values[0]}, ${values[1]}, '${values[2]}', '${values[3]}', ${values.slice(4)} )`
})

const query = `INSERT INTO subcounties (${keys.join(",")}) VALUES ${values.join(",")};`

fs.writeFileSync(path.resolve(__dirname, "./sql/subcounties.sql"), query)

// const clean = rawCounties.map((county: any) => {
//   return {
//     county_code: county.county_code,
//     county_name: county.county,
//     total: Number(county.total.replace(/,/g, "").replace(/ /g, "")),
//     male: Number(county.male.replace(/,/g, "").replace(/ /g, "")),
//     female: Number(county.female.replace(/,/g, "").replace(/ /g, "")),
//     intersex: Number(county.intersex.replace(/,/g, "").replace(/ /g, "")),
//     total_households: Number(
//       county.total_households.replace(/,/g, "").replace(/ /g, "")
//     ),
//     conventional_households: Number(
//       county.conventional_households.replace(/,/g, "").replace(/ /g, "")
//     ),
//     group_quaters: Number(
//       county.group_quaters.replace(/,/g, "").replace(/ /g, "")
//     ),
//     land_area_sq_km: Number(
//       county.land_area_sq_km.replace(/,/g, "").replace(/ /g, "")
//     ),
//     persons_per_sq_km: Number(
//       county.persons_per_sq_km.replace(/,/g, "").replace(/ /g, "")
//     ),
//     total_rural: Number(county.total_rural.replace(/,/g, "").replace(/ /g, "")),
//     male_rural: Number(county.male_rural.replace(/,/g, "").replace(/ /g, "")),
//     female_rural: Number(
//       county.female_rural.replace(/,/g, "").replace(/ /g, "")
//     ),
//     intersex_rural: Number(
//       county.intersex_rural.replace(/,/g, "").replace(/ /g, "")
//     ),
//     total_households_rural: Number(
//       county.total_households_rural.replace(/,/g, "").replace(/ /g, "")
//     ),
//     conventional_households_rural: Number(
//       county.conventional_households_rural.replace(/,/g, "").replace(/ /g, "")
//     ),
//     group_quaters_rural: Number(
//       county.group_quaters_rural.replace(/,/g, "").replace(/ /g, "")
//     ),
//     land_area_sq_km_rural: Number(
//       county.land_area_sq_km_rural.replace(/,/g, "").replace(/ /g, "")
//     ),
//     persons_per_sq_km_rural: Number(
//       county.persons_per_sq_km_rural.replace(/,/g, "").replace(/ /g, "")
//     ),
//     total_urban: Number(county.total_urban.replace(/,/g, "").replace(/ /g, "")),
//     male_urban: Number(county.male_urban.replace(/,/g, "").replace(/ /g, "")),
//     female_urban: Number(
//       county.female_urban.replace(/,/g, "").replace(/ /g, "")
//     ),
//     intersex_urban: Number(
//       county.intersex_urban.replace(/,/g, "").replace(/ /g, "")
//     ),
//     total_households_urban: Number(
//       county.total_households_urban.replace(/,/g, "").replace(/ /g, "")
//     ),
//     conventional_households_urban: Number(
//       county.conventional_households_urban.replace(/,/g, "").replace(/ /g, "")
//     ),
//     group_quaters_urban: Number(
//       county.group_quaters_urban.replace(/,/g, "").replace(/ /g, "")
//     ),
//     land_area_sq_km_urban: Number(
//       county.land_area_sq_km_urban.replace(/,/g, "").replace(/ /g, "")
//     ),
//     persons_per_sq_km_urban: Number(
//       county.persons_per_sq_km_urban.replace(/,/g, "").replace(/ /g, "")
//     ),
//   }
// })

// const keys = Object.keys(clean[0])
// const values = clean.map((county) => {
//   const values = Object.values(county)
//   return `('${values[0]}', '${values[1]}', ${values.slice(2)} )`
// })

// const query = `INSERT INTO counties (${keys.join(",")}) VALUES ${values.join(
//   ","
// )};`

// fs.writeFileSync(path.resolve(__dirname, "./sql/counties.sql"), query)
