# 1. Update the Node.js version here
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# 2. (Optional) Add this line to update npm to its latest version
RUN npm install -g npm@latest

RUN npx shadcn@latest add @magicui/marquee
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using the updated npm
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js is running on
EXPOSE 3000

# Define the command to run your Next.js application
CMD ["npm", "start"]