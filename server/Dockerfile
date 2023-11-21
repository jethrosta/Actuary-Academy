<<<<<<< HEAD
# FROM node:18-alpine

# # Working Dir
# WORKDIR /app

# # Copy Package
# COPY package*.json .

# # Install
# RUN npm i

# # Copy Source Files
# COPY . .

# CMD ["node", "index.js"]


FROM node:18-alpine

# Working Dir
WORKDIR /app

# Copy Package
COPY package*.json .

# Install
RUN npm i

# Copy Source Files
COPY dist .

CMD ["node", "index.js"]

=======
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
>>>>>>> 8f4bfc9187b7a6652253c784d0651b691e3977b6
