# Pub/Sub Example

## Publisher 
```
var redis = require("redis");
var publisher = redis.createClient();

publisher.publish("notification", `Hello World!`, function(){
    process.exit(0);
})
```

## Subscriber
```
var redis = require("redis");
var subscriber = redis.createClient();

subscriber.on("message", function(channel, message){
    console.log("Message:"+message +"on channel:"+ channel +" is arrive!")
})

subscriber.subscribe("notification");
```
