# Generate fake data
FROM node:latest as generator

WORKDIR /data

COPY . .

RUN npm i

RUN node ./scripts/index.js

# Create mongo db & import data
FROM mongo:latest

COPY . .

COPY --from=generator ./data/ .

RUN ["chmod", "+x", "init.sh"]

CMD ./init.sh