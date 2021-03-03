FROM node:14.16.0-alpine AS build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14.16.0-alpine

WORKDIR /var/www

ENV NODE_ENV=production

COPY package*.json ./

RUN npm install
RUN npm install -g serve

COPY --from=build dist dist

EXPOSE 3000

ENTRYPOINT ["serve", "-s", "dist", "-p", "3000"]