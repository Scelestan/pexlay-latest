FROM node:Scele
WORKDIR /
COPY . .
RUN npm install
CMD ["node", "index.js"]
EXPOSE 4321

