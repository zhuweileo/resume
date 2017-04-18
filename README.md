# resume

> 一个在线简历生成工具

github page预览地址

https://zhuweileo.github.io/resume/dist

# 应用使用方法

1. 注册账号/登陆

   第一次使用请注册账号，登录后注册和登录按钮消失，变为登出按钮。

2. 编辑区输入信息

   编辑区输入的信息会实时的显示于预览窗口；

   第一栏编辑区的信息条目是固定的不能添加，其它栏的可以根据需求添加或删除。

3. 保存

   保存按钮在左上角

# 代码使用方法

``` bash
#克隆仓库到本地
git clone

# 安装依赖
npm install

# 在localhost:8080 进行本地调试
npm run dev

# 生成发布文件
npm run build
```

# 文件目录

/src  目录存放主要的功能文件

/src/assets  存放静态资源

/src/components 存放vue组件

/src/lib 存放一下自己写的js功能模块

/src/store 存放数据

/src/router vue自带的路由文件，没有用到