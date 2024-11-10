FROM node:23-slim

WORKDIR /

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

ENV HOST=127.0.0.1 PORT=4321

CMD ["node", "index.js"]
