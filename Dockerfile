FROM node:8.10-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install
RUN npm run react-dev

EXPOSE 3002

CMD [ "npm", "start" ]