const request = require('supertest')
const app = require('../src/app.js')

describe("Subcounties", () => {
    it("Should get all the subcounties in a county", async () => {
        const kiambuSubCounties = {
            "Kiambu": [
                {
                    "subcounty": "GATUNDU NORTH",
                    "total": "109870",
                    "male": "54189",
                    "female": "55678",
                    "intersex": "3",
                    "areaSqKm": "286",
                    "popDensity": "384"
                },
                {
                    "subcounty": "GATUNDU SOUTH",
                    "total": "122103",
                    "male": "60384",
                    "female": "61714",
                    "intersex": "5",
                    "areaSqKm": "194",
                    "popDensity": "631"
                },
                {
                    "subcounty": "GITHUNGURI",
                    "total": "165232",
                    "male": "82037",
                    "female": "83187",
                    "intersex": "8",
                    "areaSqKm": "174",
                    "popDensity": "948"
                },
                {
                    "subcounty": "JUJA",
                    "total": "300948",
                    "male": "148446",
                    "female": "152480",
                    "intersex": "22",
                    "areaSqKm": "342",
                    "popDensity": "880"
                },
                {
                    "subcounty": "KABETE",
                    "total": "199653",
                    "male": "97794",
                    "female": "101845",
                    "intersex": "14",
                    "areaSqKm": "61",
                    "popDensity": "3289"
                },
                {
                    "subcounty": "KIAMBAA",
                    "total": "236400",
                    "male": "115690",
                    "female": "120695",
                    "intersex": "15",
                    "areaSqKm": "91",
                    "popDensity": "2595"
                },
                {
                    "subcounty": "KIAMBU",
                    "total": "145903",
                    "male": "69661",
                    "female": "76225",
                    "intersex": "17",
                    "areaSqKm": "98",
                    "popDensity": "1483"
                },
                {
                    "subcounty": "KIKUYU",
                    "total": "187122",
                    "male": "90919",
                    "female": "96198",
                    "intersex": "5",
                    "areaSqKm": "173",
                    "popDensity": "1082"
                },
                {
                    "subcounty": "LARI",
                    "total": "135303",
                    "male": "67061",
                    "female": "68238",
                    "intersex": "4",
                    "areaSqKm": "432",
                    "popDensity": "313"
                },
                {
                    "subcounty": "LIMURU",
                    "total": "159314",
                    "male": "79632",
                    "female": "79682",
                    "intersex": "0",
                    "areaSqKm": "285",
                    "popDensity": "559"
                },
                {
                    "subcounty": "RUIRU",
                    "total": "371111",
                    "male": "180947",
                    "female": "190144",
                    "intersex": "20",
                    "areaSqKm": "201",
                    "popDensity": "1846"
                },
                {
                    "subcounty": "THIKA EAST",
                    "total": "38956",
                    "male": "19688",
                    "female": "19264",
                    "intersex": "4",
                    "areaSqKm": "110",
                    "popDensity": "354"
                },
                {
                    "subcounty": "THIKA WEST",
                    "total": "245820",
                    "male": "120698",
                    "female": "125104",
                    "intersex": "18",
                    "areaSqKm": "91",
                    "popDensity": "2689"
                }
            ]
        }

        const res = await request(app)
            .get('/api/v1/counties/kiambu/subcounties')
            .expect(200)

        expect(res.body).toMatchObject(kiambuSubCounties)
    })

    it("Should get the specific subcounty in a county", async () => {
        const thikaWest = {
            "subcounty": "THIKA WEST",
            "total": "245820",
            "male": "120698",
            "female": "125104",
            "intersex": "18",
            "areaSqKm": "91",
            "popDensity": "2689"
        }

        const res = await request(app)
            .get('/api/v1/counties/kiambu/subcounties/thikawest')
            .expect(200)

        expect(res.body).toMatchObject(thikaWest)
    })
})