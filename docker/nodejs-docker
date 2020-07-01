## Node.js Docker화 예시 (PM2 사용시)

```
FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
COPY ecosystem.config.js ./

RUN npm install
RUN npm install pm2 -g

COPY . .

CMD ["pm2-runtime","start","ecosystem.config.js"]
```
