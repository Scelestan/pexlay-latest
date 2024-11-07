FROM node:Scele
WORKDIR /
COPY . .
RUN npm install
CMD ["npm install", "&& node index.js"]
EXPOSE 4321

