# CentOS7 安装redis
安装redis 是因为有一些情况需要以redis为环境，所以没有仔细深究配置，只记录安装和启动

## 下载
```bash
$ wget http://download.redis.io/releases/redis-4.0.8.tar.gz # 下载资源
$ tar xzvf redis-4.0.8.tar.gz # 解压
```
## 安装
```bash
$ cd redis-4.0.8 # 进入该目录
$ make # 安装
$ cd src # 进入src 文件夹
$ make install PREFIX=/usr/local/redis # 安装
$ cd ../ # 返回上一级文件
$ mkdir /usr/local/redis/etc # 建立文件夹
$ mv redis.conf /usr/local/redis/etc # 移动文件
$ vi /usr/local/redis/etc/redis.conf # 查看 该文件
# 将daemonize no 改成daemonize yes 配置redis为后台启动
$ vi /etc/rc.local # 查看该文件
# 在最后一行 添加 /usr/local/redis/bin/redis-server /usr/local/redis/etc/redis.conf 将redis加入到开机启动
$ /usr/local/redis/bin/redis-server /usr/local/redis/etc/redis.conf # 启动
```

## 常用命令
```bash
$ redis-server /usr/local/redis/etc/redis.conf # 启动redis
$ pkill redis # 停止
$ rm -rf /usr/local/redis # 删除安装目录 
$ rm -rf /usr/bin/redis-* # 删除所有redis相关命令脚本
```