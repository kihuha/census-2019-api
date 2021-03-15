"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.country = exports.subCounties = exports.counties = void 0;
const countyData_1 = require("./countyData");
Object.defineProperty(exports, "counties", { enumerable: true, get: function () { return countyData_1.counties; } });
const subcountyData_1 = require("./subcountyData");
Object.defineProperty(exports, "subCounties", { enumerable: true, get: function () { return subcountyData_1.subCounties; } });
const country_1 = require("./country");
Object.defineProperty(exports, "country", { enumerable: true, get: function () { return country_1.country; } });
