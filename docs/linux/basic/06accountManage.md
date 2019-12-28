# 账户管理

### `/etc/passwd`
```bash
# /etc/passwd 文件
lewis:x:1000:1000:lewis:/home/lewis:/bin/bash
```

- lewis : 用户名
- X:早期这个部分放的是用户登入才码，现作密码放入了/etc/shadow中了
- UID: 0表示系统管理员，1-999保旨7给 杀统使用的ID，1000以 上给一般使用者
- GID: 0表示系统管理员，1999保留给系统使用的ID，1000以 上给一般使用者
- lewis:使用者信息说明
- /home/lewis:用户家目录，用登入时，所在的目录
- /bin/bash:用户在登入的时候，是否可以使用shell,如果不能使用shell,则会显示/sbin/ nologin

### /etc/shadow
```bash
root:$6$n/rFT5rJDPhQUgDD$uZY7DADR0Q24FIoExQcwultLTAawBmSPwmg1nmVV81kJdovtefmqTpL3tjmS0KzduJuqcAQ/CdyDCiDddiro.::099999:7:::
```
- 1、Root: 用户名.
- 2、一串红色的字:经过加密的密码
- 3、最近更改过密码的日期:Linux中的日期、是通过1970年1月1号开始累加的日期
- 4、密码不能改修改的天数: 0表示随时可以他改
- 5、密码需要重新被修改的天数:通过修改该值，可以强制用户修改密码
- 7、密码需要变更的告警天数: 7天内系统会想用户发出告警
- 8、密码到期后，账号还可以使用的时间
- 9、账号失效日期:通过1970年1月1号开始累加的日期，到了时间后，无论密码是否过期，该账号就不能使用了
- 10、保留


### 创建用户 `useradd`
- `useradd`
    - `-u`: 设置UID
    - `-g`: 设置主要组
    - `-G`: 设置要附属组
    - `-c`: 设置用户说明
    - `-d`: 指定用户家目录
    - `-s`: 指定用户shell
    - `-e`: 账号失效日期，格式为: YYYY-MIM-DD
    - `-f`: 指定密码是否失效，0表示立刻失效，1表示永不失效

```bash
# 创建一个账号test01，设置uid为3000 主要组为testgroup, 附属组为testg01和testg02
$ useradd -u 3000 -g testgroup -G testg01,testg02 test01
```


### 修改密码 `passwd`
- `passwd 用户名: 所有人都可以通过该命令来修改自己的密码`
    - `-l`: 锁住该账号，或者在`/etc/shadow`中 放密码的位置加个!
    - `-u`: 解锁
    - `-S`: 显示账号的密码参数
    - `-n`: 接天数，设置多久可以不修改密码
    - `-X`: 接天数，设置多久内必须修改密码
    - `-w`: 接天数，设置密码过期前警告天数
    - `-i`: 接天数，设置密码失效天数

```bash
# 锁定test用户
$ passwd -l test

# 解锁test用户
$ passwd -u test
```

### 删除用户 `userdel`
```bash
# 删除test用户
$ userdel -r test # 不加r参数，不会删除家目录和邮箱
```

### acl
- `setfacl` 设置acl权限, 其中f是指file
- `getfacl` 查看acl权限, 其中f是指file

```bash
# 针对test.html文件，给test用户加上rwx权限
$ setfacl -m u:test:rwx test.html

# 针对test.html文件，给testgroup用户组加上rwx权限
$ setfacl -m g:testgroup:rwx test.html

# 针对test.html文件，把test用户 删除acl特殊权限
$ setfacl -x u:test test.html

# 针对test.html文件，清空附加的acl特殊权限
$ setfacl -b test.html

# 查看test.html文件信息
$ getfacl test.html
```