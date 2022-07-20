FROM node:16 AS install
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
EXPOSE 3000
COPY . .

FROM install AS dev
CMD [ "yarn", "dev" ]

FROM install AS production
RUN yarn build
CMD [ "yarn", "start" ]