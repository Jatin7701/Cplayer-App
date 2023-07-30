FROM node
WORKDIR /client
COPY package.json /client
RUN npm install
COPY . /client
CMD node server.js
EXPOSE 4200