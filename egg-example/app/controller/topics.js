// 一个 controller 主要实现了下面的逻辑：
//
// 1.调用 validate 方法对请求参数进行验证。
// 2.用验证过的参数调用 service 封装的业务逻辑来创建一个 topic。
// 3.按照接口约定的格式设置响应状态码和内容。

// 定义创建接口的请求参数规则
const createRule = {
  accesstoken: { type: 'string', required: false },
  title: 'string',
  tab: { type: 'enum', values: [ 'ask', 'share', 'job', 'dev' ], required: false },
  content: { type: 'string', required: false },
};

// exports.create = function* (ctx) {
//   // 校验 `ctx.request.body` 是否符合我们预期的格式
//   // 如果参数校验未通过，将会抛出一个 status = 422 的异常
//   ctx.validate(createRule);
//   // 调用 service 创建一个 topic
//   const id = yield ctx.service.topics.create(ctx.request.body);
//   // 设置响应体和状态码
//   ctx.body = {
//     topic_id: id,
//   };
//   ctx.status = 201;
// };
//
// exports.index = function* (ctx) {
//   ctx.body = yield ctx.service.topics.index(ctx.request.query);
//   ctx.status = 200;
// };
//
// exports.show = function* (ctx) {
//   ctx.body = yield ctx.service.topics.show(ctx.params);
//   ctx.status = 200;
// };
//
// exports.update = function* (ctx) {
//   // 校验 `ctx.request.body` 是否符合我们预期的格式
//   // 如果参数校验未通过，将会抛出一个 status = 422 的异常
//   ctx.validate(Object.assign(createRule, {
//     topic_id: 'string',
//   }));
//   // 调用 service 创建一个 topic
//   const id = yield ctx.service.topics.update(ctx.request.body);
//   // 设置响应体和状态码
//   ctx.body = {
//     topic_id: id,
//   };
//   ctx.status = 200;
// };

module.exports = app => {
  class TopicController extends app.Controller {
    * create(ctx) {
      // 校验 `ctx.request.body` 是否符合我们预期的格式
      // 如果参数校验未通过，将会抛出一个 status = 422 的异常
      ctx.validate(createRule);
      // 调用 service 创建一个 topic
      const id = yield ctx.service.topics.create(ctx.request.body);
      // 设置响应体和状态码
      ctx.body = {
        topic_id: id,
      };
      ctx.status = 201;
    }

    * index(ctx) {
      ctx.body = yield ctx.service.topics.index(ctx.request.query);
      ctx.status = 200;
    }

    * show(ctx) {
      ctx.body = yield ctx.service.topics.show(ctx.params);
      ctx.status = 200;
    }

    * update(ctx) {
      // 校验 `ctx.request.body` 是否符合我们预期的格式
      // 如果参数校验未通过，将会抛出一个 status = 422 的异常
      ctx.validate(Object.assign(createRule, {
        topic_id: 'string',
      }));
      // 调用 service 创建一个 topic
      const id = yield ctx.service.topics.update(ctx.request.body);
      // 设置响应体和状态码
      ctx.body = {
        topic_id: id,
      };
      ctx.status = 200;
    }

  }
  return TopicController;
};
