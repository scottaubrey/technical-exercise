FROM node:18-alpine as base

RUN mkdir /app
WORKDIR /app

ADD src src
ADD jest.config.ts jest.config.ts
ADD package.json package.json
ADD yarn.lock yarn.lock
ADD tsconfig.json tsconfig.json

RUN yarn

CMD ["yarn", "start"]
