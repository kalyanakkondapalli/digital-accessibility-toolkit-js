FROM node:20-bullseye
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["node", "src/scanner.js", "https://example.com"]
