<<<<<<< HEAD
# FROM node:17

# # Working Dir
# WORKDIR ./usr/src/app

# # Copy Package
# COPY Package*.json .

# # Install npm
# RUN npm install
=======
<<<<<<< HEAD
# FROM node:18-alpine

# # Working Dir
# WORKDIR /app

# # Copy Package
# COPY package*.json .

# # Install
# RUN npm i
>>>>>>> e409c0fcaaff5a46f5dafc62bc01b0a4d38b0af9

# # Copy Source Files
# COPY . .

<<<<<<< HEAD
# CMD ["node", "app.js"]


FROM node:18-alpine
=======
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
>>>>>>> e409c0fcaaff5a46f5dafc62bc01b0a4d38b0af9

# Working Dir
WORKDIR /app

# Copy Package
COPY package*.json .

# Install
RUN npm i

# Copy Source Files
COPY . .

<<<<<<< HEAD
CMD ["node", "index.js"]

=======
CMD ["node", "app.js"]
>>>>>>> 8f4bfc9187b7a6652253c784d0651b691e3977b6
>>>>>>> e409c0fcaaff5a46f5dafc62bc01b0a4d38b0af9
