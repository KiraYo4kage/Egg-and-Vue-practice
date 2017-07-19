'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1499234821555_1939';

  // add your config here
  config.middleware = [
    'robot','gzip'//,'bodyParser' Middleware bodyParser redefined
  ];

  //注意：框架和插件加载的中间件会在应用层配置的中间件之前，框架默认中间件不能被应用层中间件覆盖，如果应用层有自定义同名中间件，在启动时会报错。
  config.bodyParser = {
    jsonLimit: '10mb',
  };

  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };

  config.robot = {
    ua: [
      /Baiduspider/i,
    ],
  };

  config.security = {
    queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
    bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
    // csrf: false
  };

  // config.mysql = {
  //   // 单数据库信息配置
  //   client: {
  //     // host
  //     host: '172.16.28.1',
  //     // 端口号
  //     port: '3306',
  //     // 用户名
  //     user: 'root',
  //     // 密码
  //     password: '123456',
  //     // 数据库名
  //     database: 'ts-cms',
  //   },
  //   // 是否加载到 app 上，默认开启
  //   app: true,
  //   // 是否加载到 agent 上，默认关闭
  //   agent: false,
  // };

  return config;
};
