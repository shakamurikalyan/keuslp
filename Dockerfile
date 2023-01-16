FROM node:18

WORKDIR /

COPY package.json  ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["node","build"]