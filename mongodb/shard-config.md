## 샤드 서버 2대로 설정하기

### 샤드 레플리카 설정
```
systemLog:
  destination: file
  logAppend: true
  path: /data/mongo/log/shardsvr.log

storage:
  dbPath: /data/mongo/data1
  journal:
    enabled: true

processManagement:
  fork: true  # fork and run in background
  pidFilePath: /data/mongo/pid/shardsvr.pid

net:
  port: 27018
  bindIp: 127.0.0.1
  
replication:
  replSetName: rs0

sharding:
  clusterRole: shardsvr
```

### config 서버 설정

```
systemLog:
  destination: file
  logAppend: true
  path: /data/mongo/log/configsvr.log

storage:
  dbPath: /data/mongo/configsvr
  journal:
    enabled: true

processManagement:
  fork: true  # fork and run in background
  pidFilePath: /data/mongo/pid/configsvr.pid

net:
  port: 27019
  bindIp: 127.0.0.1

replication:
  replSetName: configReplSet

sharding:
  clusterRole: configsvr
```

### mongos 설정
```
systemLog:
  destination: file
  logAppend: true
  path: /data/mongo/log/mongos.log

processManagement:
  fork: true
  pidFilePath: /data/mongo/pid/mongos.pid

net:
  port: 27017
  bindIp: 127.0.0.1

sharding:
  configDB: configReplSet/host1:27019,host2:27019
```
