#!  /bin/bash

heroku container:login

# BUILD IMAGE
docker build -t registry.heroku.com/census-api-kihuha/web .

# PUSH IMAGE TO REGISTRY
heroku container:push web -a census-api-kihuha

# RELEASE
heroku container:release web
