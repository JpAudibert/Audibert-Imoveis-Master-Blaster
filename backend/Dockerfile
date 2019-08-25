FROM node:alpine

WORKDIR /www/audibert/backend

COPY package.json yarn.lock backend/

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]