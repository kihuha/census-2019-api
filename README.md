# 2019 CENSUS API

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ccca157364f44ffd9c6d9f12fcd1d2f3)](https://app.codacy.com/manual/kihuha/census-2019-api?utm_source=github.com&utm_medium=referral&utm_content=kihuha/census-2019-api&utm_campaign=Badge_Grade_Dashboard)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/6d37b3f995494069aa2630c188122700)](https://www.codacy.com/manual/kihuha/census-2019-api?utm_source=github.com&utm_medium=referral&utm_content=kihuha/census-2019-api&utm_campaign=Badge_Coverage)

The following API contains data mined from the [Kenya Population and Housing Census](https://www.knbs.or.ke/?wpdmpro=2019-kenya-population-and-housing-census-volume-i-population-by-county-and-sub-county). 


## API
Main URL -> https://census-api-kihuha.herokuapp.com/

`GET` - `COUNTRY POPULATION` - https://census-api-kihuha.herokuapp.com/api/v1/country

`GET` - `ALL COUNTIES POPULATION` - https://census-api-kihuha.herokuapp.com/api/v1/counties

`GET` - `SPECIFIC COUNTY POPULATION` - https://census-api-kihuha.herokuapp.com/api/v1/counties/<:county_name>

`GET` - `SPECIFIC COUNTY SUBCOUNTIES POPULATION` - https://census-api-kihuha.herokuapp.com/api/v1/counties/<:county_name>/subcounties

`GET` - `SPECIFIC SUBCOUNTIES POPULATION` - https://census-api-kihuha.herokuapp.com/api/v1/counties/<:county_name>/subcounties/<:subcounty_name>

