FROM node:20

WORKDIR /woofitweb

# Copy only package.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Run the build script
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]