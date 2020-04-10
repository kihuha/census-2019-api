const express = require('express')
const path = require('path')
const fs = require('fs')

const router = express.Router()
const readCountry = fs.createReadStream(path.resolve(__dirname, '../data/census-report-country.json'), 'utf-8')


router.get(
    '/',
    (req, res) => {
        res.set('Content-Type', 'application/json')
        res.status(200)

        readCountry.pipe(res)
    }
)

module.exports = router