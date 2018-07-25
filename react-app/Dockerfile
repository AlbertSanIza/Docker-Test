FROM node:9.6.1
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm install
CMD ["npm", "start"]
