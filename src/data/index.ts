import { fromJS } from "immutable"
import { counties } from "./counties"
import { subcounties } from "./subcounties"

const immutableCounties = fromJS(counties)
const immutableSubcounties = fromJS(subcounties)

export { immutableCounties as counties, immutableSubcounties as subcounties }
