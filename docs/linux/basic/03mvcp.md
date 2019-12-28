# 目录结构

- `/boot`: Linux 启动时需要的文件
- `/dev`: 设备文件
- `/etc`: 配置文件
- `/home`: 用户家目录
- `/media`: 媒体文件
- `/mnt`: 挂载文件
- `/opt`: 第三方软件
- `/proc`: 虚拟化文件
- `/root`: 管理员的家目录
- `/run`: 进程文件
- `/srv`: 压缩过的文件
- `/sys`: 系统文件
- `/usr`: 安装的软件，共享库
- `/var`: 可变数据，日志文件
- `/tmp`: 临时文件
- `/usr/bin`: 普通用户可以使用的命令
- `/usr/sbin`: 超级用户可以使用的命令
- `/usr/lib`: 32位库文件
- `/usr/l1ib64`: 64位库文件

# 文件处理
```bash
# 查看根目录下的文件信息
$ ls -l /
total 80                                                             
lrwxrwxrwx.   1 root root     7 Mar  7  2019 bin -> usr/bin  # 第一位是l, 表示是软连接，相当于windows系统的快捷方式         
dr-xr-xr-x.   5 root root  4096 Dec 14 17:02 boot # 第一位是d, 代表是文件夹               
drwxr-xr-x    2 root root  4096 Mar 12  2019 data                    
drwxr-xr-x   19 root root  3000 Dec 14 17:01 dev                     
drwxr-xr-x.  90 root root 12288 Dec 16 20:13 etc                     
drwxr-xr-x.   4 root root  4096 Dec 15 21:31 home                    
lrwxrwxrwx.   1 root root     7 Mar  7  2019 lib -> usr/lib          
lrwxrwxrwx.   1 root root     9 Mar  7  2019 lib64 -> usr/lib64      
drwx------.   2 root root 16384 Mar  7  2019 lost+found              
drwxr-xr-x.   2 root root  4096 Apr 11  2018 media                   
drwxr-xr-x.   2 root root  4096 Apr 11  2018 mnt                     
drwxr-xr-x.   3 root root  4096 Mar  7  2019 opt                     
drwxr-xr-x    2 root root  4096 Dec 14 17:14 patch                   
dr-xr-xr-x  109 root root     0 Dec 14 17:01 proc                    
dr-xr-x---.   9 root root  4096 Dec 14 18:10 root                    
drwxr-xr-x   28 root root  1020 Dec 16 02:01 run                     
lrwxrwxrwx.   1 root root     8 Mar  7  2019 sbin -> usr/sbin        
drwxr-xr-x.   2 root root  4096 Apr 11  2018 srv                     
dr-xr-xr-x   13 root root     0 Dec 16 20:16 sys                     
drwxrwxrwt.   8 root root  4096 Dec 16 03:30 tmp                     
drwxr-xr-x.  13 root root  4096 Mar  7  2019 usr                     
drwxr-xr-x.  19 root root  4096 Dec 14 17:12 var                     
drwxr-xr-x    7 root root  4096 Dec 14 20:42 www                     
```

- `d`: 表示目录
- `-`: 表示文件
- `l`: 连接文件
- `b`: 设备文件，提供存储的接口设备
- `c`: 设备文件，提供串行的接口设备--键盘，鼠标

## 新建文件
- `touch命令`

```bash
# 新建一个test文件
$ touch test
```


## 新建目录
- `mkdir命令`

```bash
# 新建一个test目录
$ mkdir test

# 递归式创建
mkdir test/test1 # 如果没有test目录将会报错
mkdir -p test/test1 # 如果没有test目录，将创建test目录，再创建test1目录

```

## 复制文件/目录
- `cp命令`

```bash
# 复制文件，单一来源。 把abc文件复制一份并命名为a
$ cp abc a

# 复制多个文件。 把a, abc两个文件复制到当前目录下的coyle文件夹中
$ cp a abc coyle/

# 将coyle目录复制一份并命名为coyle-cp
$ cp -r coyle coyle-cp

# 将coyle1,coyle2,coyle3共3个目录复制到coyle目录 
$ cp -r coyle1 coyle2 coyle3 coyle
```
## 移动文件/目录（重命名）
- `mv命令`

备注： 如果目标目录不存在，结果是重命名，如果目标目录存在，结果是移动

```bash
# 重命名文件。将node-10.15.1文件夹重命名为node文件夹
$ mv node-10.15.1 node

# 移动文件到目录。 把npm和cnpm文件移动到当前目录下的node目录中
$ mv npm cnpm node/

# 移动test1,test2目录到test目录下
mv test1 test2 test/
```

## 删除文件
- `rm命令`

备注： root用户删除文件需要二次确认，普通用户删除自己创建的文件不需要确认
```bash
# 删除文件。 删除1,2,3三个文件
$ rm 1 2 3

# 强制删除文件, -f 代表强制删除
$ rm -f test.txt

# 强制删除test文件夹，删除文件夹必须要 -r 代表递归
$ rm -rf test

# 强制清空tmp目录（不包含隐藏文件）
$ rm -rf /tmp/*

# 强制清空tmp目录（包含隐藏文件）
$ rm -rf /tmp/.*

```