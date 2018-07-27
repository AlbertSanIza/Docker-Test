FROM node:latest as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install
RUN npm run build
FROM nginx:alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
