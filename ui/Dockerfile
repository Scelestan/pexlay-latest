FROM node:18

WORKDIR /

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 80

ENV HOST=0.0.0.0 PORT=4321

CMD ["node", "index.js"]