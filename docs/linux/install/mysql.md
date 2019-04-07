# CentOS7 安装 MySQL5.7
本文的记录了博主安装Mysql的步骤，以5.7版本为例，下载路径，密码等其他配置也可以自定义，不需要全部参考

## 下载
```bash
$ mkdir app # 建立app文件夹，有的跳过
$ cd app # app文件夹
$ wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm # 下载
```

## 安装
```bash
$ yum -y install mysql57-community-release-el7-10.noarch.rpm # yum 安装
$ yum -y install mysql-community-server # yum安装MySQL
```

## 启动，登录
```bash
$ systemctl start mysqld # 启动MySQL
# 为了加强安全性，MySQL5.7为root用户随机生成了一个密码，如果安装的是RPM包，则默认是在/var/log/mysqld.log中。
$ grep 'temporary password' /var/log/mysqld.log # 查看默认密码
$ mysql -u root -p # 登录MySQL
# 输入默认密码
```

## 修改密码
```bash
# 使用默认密码登录，进行操作会报错，需要重置密码，而且默认的密码安全性是中等，也就是说要设置复杂密码才能通过
$ set global validate_password_policy=LOW; # 设置MySQL的密码等级为低
$ set global validate_password_length=6; # 设置MySQL的密码长度为6
$ ALTER USER 'root'@'localhost' IDENTIFIED BY '123456'; # 设置root 密码为123456
```

## 配置权限
```bash
$ grant all privileges on *.* to root@"%" identified by "123456"; # 设置用户 root 可以在任意 IP 下被访问, 密码 123456
$ grant all privileges on *.* to root@"localhost" identified by "123456"; # 设置root可以在本地访问 密码123456
$ flush privileges; # 使授权立即生效
$ exit; # 退出MySQL 
```
## 开放防火墙3306端口
```bash
$ firewall-cmd --permanent --zone=public --add-port=3306/tcp
$ firewall-cmd --permanent --zone=public --add-port=3306/udp
$ firewall-cmd --reload # 防火墙设置立即生效
```

## 常用命令
```bash
$ systemctl start mysqld # 启动MySQL
$ systemctl stop mysqld # 停止MySQL
$ systemctl restart mysqld # 重启MySQL
$ systemctl enable mysqld # 设置开机启动
$ systemctl status mysqld # 查看MySQL状态
```