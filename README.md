# G22 在线教学系统-前后端

项目完成，麻了

## 前端React

#### 运行

- 先clone到本地

```bash
cd g22_learning_in_zju
npm install
npm start
```

- node.js版本是12.17.0，不知道存不存在版本兼容性的问题

#### 代码目录

src目录下这几个目录存放的代码文件

- staitc 里面就一张logo图片
- component 一些标题、页脚、菜单之类的组件
- MainPage 登录和主页面两个重要页面
- Pages 目录下是若干子页面，子页面对应的内容看子页面的目录名就行，子页面的开发主要就在这里进行
- 目前加了很多东西，不过README中也没有更新，所以大家自己看吧

## 后端Django

#### 环境配置

先clone到本地，用pycharm打开

- 安装依赖库

```bash
pip install requirements.txt
```

- 数据库迁移(不需要Mysql，这里用的是django自带的嵌入式数据库sqlite3)

```bash
cd ./g22_learning_in_zju/Back-End
python manage.py makemigrations
python manage.py migrate
```

#### 运行

- 可以在pycharm中直接点击run运行，默认端口8000，也可以在terminal中使用如下指令自定义运行端口

```bash
python manage.py runserver 8000
```

#### 遇到问题

- 联系zyc