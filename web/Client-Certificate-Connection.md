# Client Certification 인증 서버 만들기
### 이론 1
서버와 클라이언트 각각 개인키와 인증서를 생성하고 서로의 인증서를 맞교환하여 CA키로 활용한다. 

### 이론 2 (아직 확실치 않음)
먼저 ca키를 만든다. 그리고 서버와 클라이언트 각각 개인키 및 csr키를 만들고 그것을 먼저 만든 ca키를 사용하여 각각의 인증서를 만든다. 

## Python + flask
### 서버코드
```
from flask import Flask
import ssl

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World"

print(__name__)
if __name__ == '__main__':
    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLS)
    ssl_context.verify_mode = ssl.CERT_REQUIRED
    ssl_context.load_verify_locations('client-crt.pem')
    ssl_context.load_cert_chain(certfile='server-crt.pem', keyfile='server-key.pem')
    app.run(host="0.0.0.0", port=8080, ssl_context=ssl_context)
```

### 클라이언트코드
-requests 라이브러리 사용
```
import requests
from requests import Request, Session

result = requests.get('https://127.0.0.1:8080/', verify='server-crt.pem', cert=('client-crt.pem','client-key.pem'))
print(result)
```

## NodeJS + Express
### 서버코드
```
const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express()

const options = {
    key:fs.readFileSync('server-key.pem'),
    cert: fs.readFileSync('server-crt.pem'),
    requestCert: true,
    rejectUnauthorized: true,
    ca: [fs.readFileSync('client-crt.pem')]
};

app.get("/", (req,res)=>{
    const cert = req.connection.getPeerCertificate();
    if(req.client.authorized){
        res.writeHead(200);
        res.end('Hello World\n');
    }
    else{
        res.status(401).send('Sorry')
    }

});

https.createServer(options, app).listen(9000 , () => console.log('Listening on 9000'))
```
### 클라이언트
```
const https = require('https');
const fs = require('fs');

const options = {
    hostname: '127.0.0.1',
    port: 9000,
    path: '/',
    method: 'GET',
    rejectUnauthorized: true,
    key: fs.readFileSync('client-key.pem'),
    cert: fs.readFileSync('client-crt.pem'),
    ca: fs.readFileSync('server-crt.pem'),
    checkServerIdentity: (servername, crt) => {
        if (servername !== crt.subject.CN) {
            throw new Error(`Servername ${servername} does not match CN ${crt.subject.CN}`);
        }
    }
}

const req = https.request(options, (res)=>{
    res.on('data', (d)=> process.stdout.write(d));
})

req.on('error', (e) => console.error(e))

req.end();  

```

## 참고
https://tech-habit.info/posts/https-cert-based-auth-with-flask-and-gunicorn/
http://derpturkey.com/client-certificate-connections-with-node/
