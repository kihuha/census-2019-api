"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe("Subcounties", () => {
    it("Should get all the subcounties in a county", async () => {
        const kiambuSubCounties = {
            "Gatundu north": {
                total: 109870,
                male: 54189,
                female: 55678,
                intersex: 3,
                popDensity: { landArea: 286, density: 384 },
            },
            "Gatundu south": {
                total: 122103,
                male: 60384,
                female: 61714,
                intersex: 5,
                popDensity: { landArea: 194, density: 631 },
            },
            Githunguri: {
                total: 165232,
                male: 82037,
                female: 83187,
                intersex: 8,
                popDensity: { landArea: 174, density: 948 },
            },
            Juja: {
                total: 300948,
                male: 148446,
                female: 152480,
                intersex: 22,
                popDensity: { landArea: 342, density: 880 },
            },
            Kabete: {
                total: 199653,
                male: 97794,
                female: 101845,
                intersex: 14,
                popDensity: { landArea: 61, density: 3289 },
            },
            Kiambaa: {
                total: 236400,
                male: 115690,
                female: 120695,
                intersex: 15,
                popDensity: { landArea: 91, density: 2595 },
            },
            Kiambu: {
                total: 145903,
                male: 69661,
                female: 76225,
                intersex: 17,
                popDensity: { landArea: 98, density: 1483 },
            },
            Kikuyu: {
                total: 187122,
                male: 90919,
                female: 96198,
                intersex: 5,
                popDensity: { landArea: 173, density: 1082 },
            },
            Lari: {
                total: 135303,
                male: 67061,
                female: 68238,
                intersex: 4,
                popDensity: { landArea: 432, density: 313 },
            },
            Limuru: {
                total: 159314,
                male: 79632,
                female: 79682,
                intersex: 0,
                popDensity: { landArea: 285, density: 559 },
            },
            Ruiru: {
                total: 371111,
                male: 180947,
                female: 190144,
                intersex: 20,
                popDensity: { landArea: 201, density: 1846 },
            },
            "Thika east": {
                total: 38956,
                male: 19688,
                female: 19264,
                intersex: 4,
                popDensity: { landArea: 110, density: 354 },
            },
            "Thika west": {
                total: 245820,
                male: 120698,
                female: 125104,
                intersex: 18,
                popDensity: { landArea: 91, density: 2689 },
            },
        };
        const res = await supertest_1.default(app_1.default)
            .get("/api/v1/counties/kiambu/subcounties")
            .expect(200);
        expect(res.body).toMatchObject(kiambuSubCounties);
    });
    it("Should get the specific subcounty in a county", async () => {
        const thikaWest = {
            total: 245820,
            male: 120698,
            female: 125104,
            intersex: 18,
            popDensity: { landArea: 91, density: 2689 },
        };
        const res = await supertest_1.default(app_1.default)
            .get("/api/v1/counties/kiambu/subcounties/thika-west")
            .expect(200);
        expect(res.body).toMatchObject(thikaWest);
    });
});
