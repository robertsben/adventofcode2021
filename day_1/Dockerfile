FROM node:16 as build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY tsconfig.json tsconfig.json

RUN npm i

COPY fixtures fixtures
COPY src ./src

RUN npm run build


FROM node:16 as result

WORKDIR /app
ENV NODE_ENV production

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm i

COPY --from=build /app/build ./build
COPY --from=build /app/fixtures ./fixtures

CMD ["npm", "run", "start"]


FROM build as development

COPY nodemon.json nodemon.json

CMD ["npm", "run", "dev"]
