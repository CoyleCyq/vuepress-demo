# 查看文件和目录

### 查看当前所在路径 `pwd命令`

- `pwd`

```bash
# 案例
$ pwd
/root
```

### 查看当前路径下的文件 `ls命令`

- `ls -选项 -参数(目录)`
    - `-d` : 只看当前目录的信息
    - `-l` : 看详细信息
    - `-a` : 显示所有 任何一个文件前面加上".", 表示隐藏文件
    - `-h` : 显示文件大小

```bash
# 查看当前路径下的文件
$ ls
install.sh

# 查看当前路径下的文件的详细信息
$ ls -l
total 20
-rw-r--r-- 1 root root 19776 Nov 28 15:47 install.sh

# 显示当前目录下的所有文件（包含隐藏文件）
$ ls -a
.   .bash_history  .bash_profile  .cache   .cshrc      .npm    .pearrc  .pki  .pydistutils.cfg  .ssh     .viminfo
..  .bash_logout   .bashrc        .config  install.sh  .npmrc  .pip     .pm2  .rnd              .tcshrc

# 显示当前目录下所有文件的详细信息
$ ls -al # 或者 ls -a -l , 可以分开写，也可以写在一起
total 96
dr-xr-x---.  9 root root  4096 Dec 14 18:10 .
dr-xr-xr-x. 21 root root  4096 Dec 15 22:15 ..
-rw-------   1 root root   534 Dec 15 22:14 .bash_history
-rw-r--r--.  1 root root    18 Dec 29  2013 .bash_logout
-rw-r--r--.  1 root root   176 Dec 29  2013 .bash_profile
-rw-r--r--.  1 root root   378 Dec 14 17:35 .bashrc
drwxr-xr-x   5 root root  4096 Dec 14 17:30 .cache
drwxr-xr-x   4 root root  4096 Dec 14 17:35 .config
-rw-r--r--.  1 root root   100 Dec 29  2013 .cshrc
-rw-r--r--   1 root root 19776 Nov 28 15:47 install.sh
drwxr-xr-x   4 root root  4096 Dec 14 17:35 .npm
-rw-------   1 root root    37 Dec 14 17:35 .npmrc
-rw-r--r--   1 root root   195 Dec 14 17:17 .pearrc
drwxr-xr-x   2 root root  4096 Dec 14 17:02 .pip
drwxr-----   3 root root  4096 Dec 14 17:04 .pki
drwxr-xr-x   5 root root  4096 Dec 14 18:10 .pm2
-rw-r--r--   1 root root    73 Dec 14 17:02 .pydistutils.cfg
-rw-------   1 root root  1024 Dec 14 17:17 .rnd
drwx------   2 root root  4096 Mar 12  2019 .ssh
-rw-r--r--.  1 root root   129 Dec 29  2013 .tcshrc
-rw-------   1 root root     0 Dec 14 17:01 .viminfo

# 显示当前目录下文件的详细信息和文件大小
$ ls -lh
total 20K # 单位会变成 K
-rw-r--r-- 1 root root 20K Nov 28 15:47 install.sh

# 查看当前目录的信息
$ ls -d
.

# 查看当前目录的详细信息
$ ls -dl
dr-xr-x---. 9 root root 4096 Dec 14 18:10 .

# 查看某一文件或文件夹(www文件夹)下的文件的的详细信息
$ ls -l /www/
total 20
drwxr-xr-x  6 root root 4096 Dec 14 19:14 backup
drwxr-xr-x  6 root root 4096 Dec 15 16:02 Recycle_bin
drwxr-xr-x 12 root root 4096 Dec 14 18:24 server
drwxrwxrwx  3 root root 4096 Dec 15 16:02 wwwlogs
drwxr-xr-x  3 root root 4096 Dec 15 16:02 wwwroot
```

### 路径切换 `cd命令`

- `路径的切换：cd`
    - `-`: 返回到之前的目录
    - `..`: 返回到上一级目录
    - `.` : 当前目录
    - `~`: 到当前用户的家目录