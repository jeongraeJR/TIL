## nodejs rabbitMQ 연동해보기
사용 라이브러리 : amqplib

https://www.npmjs.com/package/amqplib

## 메세지 송신
```
var amqp = require('amqplib');

//const url = 'amqp://rabbitmq:password@127.0.0.1:15672';
const url = "amqp://localhost"
const queueName = 'MQ_test';


async function sendMessage(){
    try{
        const connect = await amqp.connect(url);
        const channel = await connect.createChannel(connect);
        const queue = await channel.assertQueue(queueName, {durable:true});
        console.log(queue);
        let sendData = {
            type : 'message',
            message : 'test message!'
        };
        const sending = await channel.sendToQueue(queueName, encode(sendData), {
            persistent: true
        });
     
   
    }catch(err){
        console.log(err);
    }finally {
      
    }
}
sendMessage();

function encode(doc) {  
    return new Buffer(JSON.stringify(doc));
}
```

## 메세지 수신
```
var amqp = require('amqplib');

//const url = 'amqp://rabbitmq:password@127.0.0.1:15672';
const url = "amqp://localhost"
const queueName = 'MQ_test';


async function sendMessage(){
    try{
        const connect = await amqp.connect(url);
        const channel = await connect.createChannel(connect);
        const message = await channel.get(queueName, {});
        if (message) {
            channel.ack(message);
            console.log(message.content.toString());
        }
        else {
            return;
        }
   
    }catch(err){
        console.log(err);
    }
}
sendMessage();

function encode(doc) {  
    return new Buffer(JSON.stringify(doc));
}
```
