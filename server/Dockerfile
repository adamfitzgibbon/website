FROM node:16 AS install
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
EXPOSE 8080

FROM install AS dev
RUN yarn build
CMD [ "yarn", "dev"]

FROM install AS production
COPY .env.production .env
RUN yarn build
ENV NODE_ENV production
CMD [ "yarn", "start" ]
USER node