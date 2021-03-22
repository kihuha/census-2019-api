#!  /bin/bash

# BUILD IMAGE
docker build -t registry.heroku.com/census-api-kihuha/web .

# PUSH IMAGE TO REGISTRY
# b4c75131-f8e3-4f67-aebe-e84e7e36e505   ---- HEROKU OAUTH TOKEN 
# RELEASE