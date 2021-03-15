"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
test("Should fetch specific county data", async () => {
    // lowercase
    const res = await supertest_1.default(app_1.default).get("/api/v1/counties/nairobi").expect(200);
    expect(res.body).toMatchObject({
        male: 2192452,
        female: 2204376,
        intersex: 245,
        households: 1506888,
        averageHouseholds: 2.9,
        popDensity: {
            landArea: 703.9,
            density: 6247,
        },
    });
    //uppercase
    const res2 = await supertest_1.default(app_1.default).get("/api/v1/counties/NAIROBI").expect(200);
    expect(res2.body).toMatchObject({
        male: 2192452,
        female: 2204376,
        intersex: 245,
        total: 4397073,
        households: 1506888,
        averageHouseholds: 2.9,
        popDensity: {
            landArea: 703.9,
            density: 6247,
        },
    });
    //mixedcase
    const res3 = await supertest_1.default(app_1.default).get("/api/v1/counties/Nairobi").expect(200);
    expect(res3.body).toMatchObject({
        male: 2192452,
        female: 2204376,
        intersex: 245,
        total: 4397073,
        households: 1506888,
        averageHouseholds: 2.9,
        popDensity: {
            landArea: 703.9,
            density: 6247,
        },
    });
});
