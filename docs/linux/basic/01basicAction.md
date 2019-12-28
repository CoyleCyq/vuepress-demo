# 用户的基本操作

### 查看当前登录的用户

- `whoami`

```bash
# 案例
$ whoami
coyle
```

### 添加用户

- `useradd`

备注：只有在root管理员权限下才能创建用户，在其他用户下会提示权限不足

```bash
# 创建一个用户：coyle
$ useradd coyle
```

### 设置用户的登入密码

- `passwd`

```bash
# 设置coyle的登录密码
$ passwd coyle
# 会出现提示: 
Changing password for user coyle.
New password:
# 在New Password: 后输入密码，然后回车，提示需要重复输入
Retype new password:
# 输入后提示成功
passwd: all authentication tokens updated successfully.
```

### 切换用户

- `su`

备注： root切换到普通用户不需要输入密码，普通用户切换到root用户，需要输入密码

```bash
# 切换到用户: coyle
$ su coyle

# 切换到用户：root
# 方法一：
$ su root
Password:

# 方法二：直接输入su
$ su
Password:
```

### 常用的Shell快捷键

- `Ctrl+a` : 调到命令行的开头
- `Ctrl+e` : 调到命令行的末尾
- `Ctrl+u` : 将光标处到命令行开头的内容清除
- `Ctrl+k` : 将光标处到命令行结尾的内容清除
- `Ctrl+r` : 在历史记录列表中搜索某一命令
- `Ctrl+l` : 清屏
- `history`: 显示历史命令
- `![number]`: 直接执行曾经执行过的命令
- 上下箭头： 快速浏览上一个/下一个曾经执行的命令