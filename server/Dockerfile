FROM node:17

# Working Dir
WORKDIR ./usr/src/app

# Copy Package
COPY Package*.json .

# Install npm
RUN npm install

# Copy Source Files
COPY . .

CMD ["node", "app.js"]
