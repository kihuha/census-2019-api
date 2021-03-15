"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
const readCounties = fs_1.default.readFileSync(path_1.default.resolve(__dirname, "../data/census-report-counties.json"), "utf-8");
const readSubCounties = fs_1.default.readFileSync(path_1.default.resolve(__dirname, "../data/census-report-subcounties.json"), "utf-8");
router.get("/", (req, res) => {
    const rawData = JSON.parse(readCounties);
    const data = rawData.sort((a, b) => Number(b.total) - Number(a.total));
    res.status(200).json(data);
});
router.get("/:county", (req, res) => {
    const requestedCounty = JSON.parse(readCounties).filter((county) => {
        return (county.county
            .replace(" ", "")
            .replace(/[^\w\s]/, "")
            .toLowerCase() === req.params.county.toLowerCase());
    });
    console.log(requestedCounty);
    const response = requestedCounty.length !== 0
        ? requestedCounty[0]
        : { error: "County not found" };
    res.status(200).json(response);
});
router.get("/:county/subcounties", (req, res) => {
    const requestedCounty = JSON.parse(readSubCounties).filter((county) => {
        return (Object.keys(county)[0]
            .replace(" ", "")
            .replace(/[^\w\s]/, "")
            .toLowerCase() === req.params.county);
    });
    const response = requestedCounty.length !== 0
        ? requestedCounty[0]
        : { error: "County not found" };
    res.status(200).json(response);
});
router.get("/:county/subcounties/:subcounty", (req, res) => {
    const requestedCounty = JSON.parse(readSubCounties).filter((county) => {
        return (Object.keys(county)[0]
            .replace(" ", "")
            .replace(/[^\w\s]/, "")
            .toLowerCase() === req.params.county);
    });
    console.log(Object.values(JSON.parse(readSubCounties))
        .flat()
        .filter((county) => {
        return (Object.keys(county)[0]
            .replace(" ", "")
            .replace(/[^\w\s]/, "")
            .toLowerCase() === req.params.county);
    }));
    const requestedSubCounty = Object.values(requestedCounty[0])
        .flat()
        .filter((subcounty) => {
        const values = Object.values(subcounty);
        return (values[0]
            .replace(" ", "")
            .replace(/[^\w\s]/, "")
            .toLowerCase() === req.params.subcounty);
    })[0];
    const response = requestedSubCounty.length !== 0
        ? requestedSubCounty
        : { error: "Sub County not found" };
    res.status(200).json(response);
});
exports.default = router;
