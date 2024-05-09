# nest 命令

## 全局安装

```shell
npm install -g @nestjs/cli
```

## 创建项目

```shell
nest new project-name
cd project-name
npm install
npm run start:dev
```

## 命令
```shell
# Generate a module declaration
# 生成模块文件
nest g s mo
```

| name          | alias       | description                                  |
|---------------|-------------|----------------------------------------------|
| application   | application | Generate a new application workspace         |
| class         | cl          | Generate a new class                         |
| configuration | config      | Generate a CLI configuration file            |
| controller    | co          | Generate a controller declaration            |
| decorator     | d           | Generate a custom decorator                  |
| filter        | f           | Generate a filter declaration                |
| gateway       | ga          | Generate a gateway declaration               |
| guard         | gu          | Generate a guard declaration                 |
| interceptor   | itc         | Generate an interceptor declaration          |
| interface     | itf         | Generate an interface                        |
| library       | lib         | Generate a new library within a monorepo     |
| middleware    | mi          | Generate a middleware declaration            |
| module        | mo          | Generate a module declaration                |
| pipe          | pi          | Generate a pipe declaration                  |
| provider      | pr          | Generate a provider declaration              |
| resolver      | r           | Generate a GraphQL resolver declaration      |
| resource      | res         | Generate a new CRUD resource                 |
| service       | s           | Generate a service declaration               |
| sub-app       | app         | Generate a new application within a monorepo |


## session
```shell
npm install express-session --save
```
```shell
npm i @types/express-session -D
```

