# node 安装
## 简介
本文档记录了 `linux` 系统 `CentOS7` 安装 `node v10.15.3` 版本

<src-BackToTop></src-BackToTop>

## 下载
```bash
$ cd /usr/local/lib # 跳到/usr/local/lib文件夹
$ wget https://npm.taobao.org/mirrors/node/v10.15.3/node-v10.15.3-linux-x64.tar.xz # 下载node
```

## 解压缩
```bash
$ tar -xvf node-v10.15.3-linux-x64.tar.xz # 解压缩到当前文件夹
$ mv node-v10.15.3-linux-x64 nodejs # 更改文件夹名为nodejs
```

## 建立软连接
```bash
$ cd ~ # 去根目录下
$ ln -s /usr/local/lib/nodejs/bin/node /usr/local/bin/node # 将node全局软连接(全局可用)
$ ln -s /usr/local/lib/nodejs/bin/npm /usr/local/bin/npm # 将npm全局软连接(全局可用)
$ ln -s /usr/local/lib/nodejs/bin/npx /usr/local/bin/npx # 将npx全局软连接(全局可用)
$ node -v # 出现版本号表示成功
```

## 可能出现的问题
软连接失败 需要删除软连接，失败原因一般是文件路径错误或者不是在根目录下进行软连接
```bash
$ cd /usr/local/bin # 去/usr/local/bin文件夹
$ rm -rf node # 删除node软连接
$ rm -rf npm # 删除npm软连接
$ rm -rf npx # 删除npx软连接
```
然后重新进行第3步 建立软连接
```bash
# 检查是否安装成功
$ node -v # 出现版本号表示成功
```


