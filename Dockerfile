# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5173
EXPOSE 5173

# Run the development server
CMD ["npm", "run", "dev"]



# Base image
# FROM node:18

# # Set working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the application
# RUN npm run build

# # Expose the application on port 5055
# EXPOSE 5173

# # Serve the React app using serve (a lightweight static server)
# RUN npm install -g serve
# CMD ["serve", "-s", "build", "-l", "5173"]
