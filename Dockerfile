FROM node:20
RUN apk add --no-cache tzdata
ENV TZ Australia/Sydney
# Create app directory
WORKDIR /app

COPY package*.json /app/
# Installs everything from package.json
RUN npm install
# Will copy all files except node_modules
COPY . .
# Building app, (can this be done locally & push .next folder on instance)
RUN npm run build
# even though port is being exposed it will
# be overridden by docker-compose port
EXPOSE 3000 

CMD [ "npm", "start" ]