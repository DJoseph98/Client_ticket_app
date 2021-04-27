FROM node:12

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app

COPY . /app

RUN yarn install
RUN chmod +x ./wait-for-it.sh
CMD sh -c './wait-for-it.sh mysql-db:3306 -- yarn db:migrate-all && yarn dev-server'
