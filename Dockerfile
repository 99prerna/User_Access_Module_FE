FROM node:18

# Set working directory
WORKDIR /app

# Copy the rest of the app source code
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 5173

# Start nginx
CMD ["npm", "run", "dev"]
