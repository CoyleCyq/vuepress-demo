# 文件权限

```bash
# 查看etc目录信息
$ ls -l /etc
> -rw-r--r--.    1      root      root     1037      Dec 14 17:04   yum.conf
> drwxr-xr-x.    2      root      root     4096      Dec 19 12:56   yum.repos.d
# ---权限-----链接数---所有者---所在组---容量,默认单位B--修改日期---文件名 
```

## 权限

- 第一个代表的文件属性

属性 | 说明
---|---
- | 表示文件
d | 表示目录
l | 表示链接文件
b | 设备文件，提供储存的接口设备
c | 设备文件，提供串行的接口设备--键盘，鼠标

- 文件的权限： 所有者, 所有组, 其他人

> `rwx` 分别是 读，写，执行，没有权限就是-

第一组rwx: 文件所有者的权限

第二组rwx: 文件所属组的权限

第三组rwx: 其他人的权限

- 目录的权限

r: 具有读取目录结构的权限，可以查看目录下有哪些文件

w: 可以在目录下新建新的文件和目录，可以删除文件和目录，可以重命名文件和目录，可以移动文件和目录

x: 是否可以进入该目录

## 修改权限

- chown: 修改文件的所有者， -R 递归修改

`语法：chown options file`

- chgrp: 修改文件的所属组， -R 递归修改

`语法：chgrp options file`

- chmod: 修改文件的拥有者和所属组的权限， 加减法， 数字法r=4, w=2, x=1
    - u: 代表所有者
    - g: 代表所有组
    - o: 代表其他人
    
rwx = 4+2+1=7

rw- = 4+2=6

r-- = 4

r-x = 4+1=5

```bash
#  将test.html文件的所有者改成test用户
$ chown test test.html

#  将test.html文件的所属组改成testgroup组
$ chgrp testgroup test.html

#  将test目录以及目录下的所有文件、目录的所有者改成test用户
$ chown -R test test

# 给test.html文件的所属组添加写权限
$ chmod g+w test.html

# 给test.html文件的所属组删除写权限
$ chmod g-w test.html

# 给test.html文件的其他人添加读，写，执行权限
$ chmod o=rwx test.html

# 给test.html文件的所有者，所属组，其他人添加读，写，执行权限
$ chmod 777 test.html

# 给test.html文件的所有者加rwx权限，所属组加rw-权限，其他人加r--权限
$ chmod 764 test.html
```

## 创建一个组 `groupadd`
`groupadd `

## 给组添加用户或删除用户 `gpasswd`
`gpasswd [ad] 用户 组` 

```bash
# 把test用户添加到testgroup组里面
$ gpasswd -a test testgroup

# 把test用户从testgroup组删除
$ gpasswd -d test testgroup
```
- 文件的权限特点

文件的拥有者，即使没有写入权限，也可以强制写入，所属组和其他人不行

- 目录的权限特点

如果