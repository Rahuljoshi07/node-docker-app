# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files separately for layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app files
COPY . .

# Set environment variable
ENV PORT=3000

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "index.js"]
