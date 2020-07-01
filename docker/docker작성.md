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

## Python Flask Docker화 예시

```
FROM python
COPY . /app
WORKDIR /app
RUN pip install -r requirements.txt
EXPOSE 5000
ENV FLASK_APP start.py
CMD ["flask", "run","--host=0.0.0.0"]
```
