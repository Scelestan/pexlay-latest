FROM node:23-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY --chown=node:node . .
EXPOSE 4321
CMD ["node", "index.js"]
