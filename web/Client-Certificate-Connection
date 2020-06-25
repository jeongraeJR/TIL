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
