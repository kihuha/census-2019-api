"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.status(200).json(data_1.counties);
});
/**
 * This function takes in either the counties object or
 * the subcounties object and returns a single county or subcounty from
 * the object passed in
 *
 * @param name string
 * @param object Counties or SubCounties object
 * @returns County or Subcounty
 */
const getData = (name, object) => {
    const county = name[0].toUpperCase() + name.slice(1, name.length).toLowerCase();
    if (county.split("-").length > 1) {
        const split = county.split("-");
        const searchString = `${split[0]} ${split[1]}`;
        return object[searchString];
    }
    else {
        return object[county];
    }
};
router.get("/:county", (req, res) => {
    const response = getData(req.params.county, data_1.counties) || {
        error: "County not found",
    };
    res.status(200).json(response);
});
router.get("/:county/subcounties", (req, res) => {
    const data = getData(req.params.county, data_1.subCounties);
    const response = data || { error: "County not found" };
    res.status(200).json(response);
});
router.get("/:county/subcounties/:subcounty", (req, res) => {
    const data = getData(req.params.county, data_1.subCounties);
    const result = getData(req.params.subcounty, data);
    const response = result || { error: "Sub County not found" };
    res.status(200).json(response);
});
exports.default = router;
