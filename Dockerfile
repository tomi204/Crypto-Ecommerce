FROM node:18.7.0-alpine3.16 as builder

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package*.json .

RUN npm install --silent --production

COPY . .

RUN npm run build


FROM nginx:1.23.1-alpine as web

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /usr/src/app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

