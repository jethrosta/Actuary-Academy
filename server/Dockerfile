# Stage 1: Build
FROM node:18.18.2 AS build

# Working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application (modify the build command according to your project)
RUN npm run build

# Stage 2: Final image
FROM node:18.18.2-alpine3.18 AS final

# Set the working directory in the final image
WORKDIR /usr/src/app

# Copy only necessary files from the build stage
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/.env ./

# Install production dependencies only
RUN npm install --production

# Expose the port if necessary
EXPOSE 8080

# Start the Node.js application
CMD ["node", "dist/index.js"]