const express = require('express'); // webpack集成了express 不用单独安装

let app = express();

// 引入webpack
let webpack = require('webpack');

// 引入webpack中间件
let middle = require('webpack-dev-middleware');

// 引入配置文件
let config = require('./webpack.config.js');

// 处理配置文件
let complier = webpack(config);

// 启动webpack
app.use(middle(complier))

app.get('/user', (req, res)=>{
    res.json({msg: '我是返回数据'})
})

app.listen(3100)
