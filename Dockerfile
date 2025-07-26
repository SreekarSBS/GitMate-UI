# Stage 1 Build the React Frontend
FROM node:18 AS build
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install
 
# Copy all Source Code and build
COPY . .
RUN npm run build

# Stage 2: Use NGINX to serve the production build
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose Port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]