const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()
const readCounties = fs.readFileSync(path.resolve(__dirname, '../data/census-report-counties.json'), 'utf-8')
const readSubCounties = fs.readFileSync(path.resolve(__dirname, '../data/census-report-subcounties.json'), 'utf-8')


router.get(
    '/',
    (req, res) => {
        let rawData = JSON.parse(readCounties)
        let data = rawData.sort(
            (a, b) => b.total - a.total
        )
        res.status(200).json(data)
    }
)

router.get(
    '/:county',
    (req, res) => {
        let requestedCounty = JSON.parse(readCounties).filter(
            county => {
                return county.county.replace(' ', '').replace(/[^\w\s]/, '').toLowerCase() === req.params.county.toLowerCase()
            }
        )

        let response = requestedCounty.length !== 0
            ? requestedCounty[0]
            : {"error": "County not found"}

        res.status(200).json(response)

    }
)

router.get(
    '/:county/subcounties',
    (req, res) => {
        let requestedCounty = JSON.parse(readSubCounties).filter(
            county => {
                return Object.keys(county)[0].replace(' ', '').replace(/[^\w\s]/, '').toLowerCase() === req.params.county
            }
        )

        let response = requestedCounty.length !== 0
            ? requestedCounty[0]
            : {"error": "County not found"}

        res.status(200).json(response)

    }
)

router.get(
    '/:county/subcounties/:subcounty',
    (req, res) => {
        let requestedCounty = JSON.parse(readSubCounties).filter(
            county => {
                return Object.keys(county)[0].replace(' ', '').replace(/[^\w\s]/, '').toLowerCase() === req.params.county
            }
        )

        const requestedSubCounty = Object.values(requestedCounty[0]).flat().filter(
            subcounty => {
                return Object.values(subcounty)[0].replace(' ', '').replace(/[^\w\s]/, '').toLowerCase() === req.params.subcounty
            }
        )[0]

        let response = requestedSubCounty.length !== 0
            ? requestedSubCounty
            : {"error": "Sub County not found"}

        res.status(200).json(response)
    }
)

module.exports = router