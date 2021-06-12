FROM node:14-alpine
RUN npm install -g pm2
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
COPY . ./
EXPOSE 3331
CMD ["pm2", "start", "./bin/www"]
