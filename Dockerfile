FROM node:14-alpine3.14 as build

WORKDIR /home/node/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY src /home/node/app/src

RUN npm run build



FROM node:14-alpine3.14 as release

COPY --from=build /home/node/app/dist ./dist
COPY --from=build /home/node/app/node_modules ./node_modules

EXPOSE 8080

CMD ["node", "./dist/app.js"]
