const express = require('express')
const path = require('path')
const country = require(path.resolve(__dirname, 'country.js'))
const counties = require(path.resolve(__dirname, 'counties.js'))

const app = express()

app.get(
    '/',
    (req, res) => {
        return res.json({"test": "Server is running"})
    }
)

app.use(
    '/api/v1/country',
    country
)

app.use(
    '/api/v1/counties',
    counties
)

module.exports = app