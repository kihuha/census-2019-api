const fs = require('fs')

let readStream = fs.createReadStream('./Subcounty - Sheet1.csv', 'utf-8')
let writeStream = fs.createWriteStream('./census-report-subcounties.json')

readStream.on(
    'data',
    (chunk) => {
        let rawSubCounties = chunk.split('\r\n')
        let subCounties = rawSubCounties.slice(1, rawSubCounties.length)


        let final = []
        arr = []

        function addArr(key, values) {
            let county = final.filter(
                (item) => {
                    return Object.keys(item)[0] === key
                }
            )

            if (county.length === 0) {
                final.push({ [key]: [values] })
            } else {
                let item = county[0][key]
                item.push(values)
            }
        }

        for (let i = 0; i < subCounties.length; i++) {
            const element = subCounties[i].split(',');

            obj = {
                subcounty: element[1],
                total: element[2],
                male: element[3],
                female: element[4],
                intersex: element[5],
                areaSqKm: element[6],
                popDensity: element[7]
            }

            addArr(element[0], obj)
        }
        
        writeStream.write(JSON.stringify(final, null, 4))
    }
)

