FROM node:Scele
WORKDIR /
COPY . .
RUN npm install
CMD ["node", "index.js"]
EXPOSE 4321

dckr_oat_OKGrU2xR9_8ReTEy0s77i6RdCYQwMN_h