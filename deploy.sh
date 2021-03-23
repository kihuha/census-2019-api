#!  /bin/bash

# BUILD IMAGE
docker build -t registry.heroku.com/census-api-kihuha/web .

# PUSH IMAGE TO REGISTRY
docker push registry.heroku.com/census-api-kihuha/web

# RELEASE
heroku container:release web