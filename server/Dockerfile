# FROM node:17

# # Working Dir
# WORKDIR ./usr/src/app

# # Copy Package
# COPY Package*.json .

# # Install npm
# RUN npm install

# # Copy Source Files
# COPY . .

# CMD ["node", "app.js"]


FROM node:18-alpine

# Working Dir
WORKDIR /app

# Copy Package
COPY package*.json .

# Install
RUN npm i

# Copy Source Files
COPY . .

CMD ["node", "index.js"]

