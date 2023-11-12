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

