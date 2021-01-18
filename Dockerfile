FROM node:14-alpine

ENV NODE_ENV=development

COPY ./package.json /usr/src/service/package.json
COPY ./yarn.lock /usr/src/service/yarn.lock

WORKDIR /usr/src/service

RUN yarn

COPY . /usr/src/service

RUN yarn run build

CMD ["node", "dist/main.js"]

