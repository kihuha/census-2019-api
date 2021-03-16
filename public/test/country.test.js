"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
test("Should fetch the country data", async () => {
    const res = await supertest_1.default(app_1.default).get("/api/v1/country").expect(200);
    expect(res.body).toMatchObject({
        total: 47564296,
        male: 23548056,
        female: 24014716,
        intersex: 1524,
        households: 12143913,
        averageHouseholds: 3.9,
        popDensity: {
            landArea: 9123,
            density: 68,
        },
        populationIn2009: 512690,
        popChange: 108551,
    });
});
