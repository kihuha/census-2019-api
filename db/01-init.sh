#!/bin/bash
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE USER $APP_DB_USER WITH PASSWORD '$APP_DB_PASS';
  CREATE DATABASE $APP_DB_NAME;
  GRANT ALL PRIVILEGES ON DATABASE $APP_DB_NAME TO $APP_DB_USER;
  \connect $APP_DB_NAME $APP_DB_USER
  BEGIN;
   CREATE TABLE counties (
        id SERIAL PRIMARY KEY,
        county_name TEXT UNIQUE NOT NULL,
        county_code TEXT UNIQUE,
        total INT NOT NULL,
        male INT NOT NULL,
        female INT NOT NULL,
        intersex INT NOT NULL,
        total_households INT NOT NULL,
        conventional_households INT NOT NULL,
        group_quaters INT NOT NULL,
        land_area_sq_km FLOAT NOT NULL,
        persons_per_sq_km FLOAT NOT NULL,
        total_rural INT NOT NULL,
        male_rural INT NOT NULL,
        female_rural INT NOT NULL,
        intersex_rural INT NOT NULL,
        total_households_rural INT NOT NULL,
        conventional_households_rural INT NOT NULL,
        group_quaters_rural INT NOT NULL,
        land_area_sq_km_rural FLOAT NOT NULL,
        persons_per_sq_km_rural FLOAT NOT NULL,
        total_urban INT NOT NULL,
        male_urban INT NOT NULL,
        female_urban INT NOT NULL,
        intersex_urban INT NOT NULL,
        total_households_urban INT NOT NULL,
        conventional_households_urban INT NOT NULL,
        group_quaters_urban INT NOT NULL,
        land_area_sq_km_urban FLOAT NOT NULL,
        persons_per_sq_km_urban FLOAT NOT NULL
    );
  COMMIT;

EOSQL