# CentOS7 安装redis
安装redis 是因为有一些情况需要以redis为环境，所以没有仔细深究配置，只记录安装和启动

## 安装
```bash
$ whereis redis-cli # 检查有没有安装redis-cli
$ whereis redis-server # 检查有没有安装redis-server
$ yum install -y redis # 安装redis
$ redis-server & # 加上`&`号使redis以后台程序方式运行
```

## 常用命令
```bash
$ ps -ef |grep redis # 检测后台进程是否存在
$ netstat -lntp | grep 6379 # 检测6379端口是否在监听
$ redis-server /usr/local/redis/etc/redis.conf # 启动redis
$ pkill redis # 停止
$ rm -rf /usr/local/redis # 删除安装目录 
$ rm -rf /usr/bin/redis-* # 删除所有redis相关命令脚本
```