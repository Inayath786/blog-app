# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all app files
COPY . .

# Expose app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
