FROM node:16 AS build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./

RUN yarn

# Bundle app source
COPY . .

RUN yarn build

ENV NODE_ENV production

EXPOSE 3000

CMD [ "yarn", "start" ]