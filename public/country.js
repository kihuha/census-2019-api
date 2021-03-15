"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
const readCountry = fs_1.default.createReadStream(path_1.default.resolve(__dirname, "../data/census-report-country.json"), "utf-8");
router.get("/", (req, res) => {
    res.set("Content-Type", "application/json");
    res.status(200);
    readCountry.pipe(res);
});
exports.default = router;
