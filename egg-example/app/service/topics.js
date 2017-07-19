// 简单来说，Service 就是在复杂业务场景下用于做业务逻辑封装的一个抽象层，提供这个抽象有以下几个好处：
//
// 保持 Controller 中的逻辑更加简洁。
// 保持业务逻辑的独立性，抽象出来的 Service 可以被多个 Controller 重复调用。
// 将逻辑和展现分离，更容易编写测试用例。

module.exports = app => {
  class TopicService extends app.Service {
    constructor(ctx) {
      super(ctx);// 相当于app.Service.call(this,ctx)继承父类自身的属性,包括后面要用到的this.ctx
      this.root = 'https://cnodejs.org/api/v1';
    }
    * create(params) {
      const result = yield this.ctx.curl(`${this.root}/topics`, {
        method: 'post',
        data: params,
        dataType: 'json',
        contentType: 'json',
      });
      this.checkSuccess(result);
      return result.data.topic_id;
    }

    * index(params) {
      // this.logger.info(this.ctx);
      // this.logger.info(this.app.config.env)
      const result = yield this.ctx.curl(`${this.root}/topics`, {
        data: params,
        dataType: 'json',
      });
      this.checkSuccess(result);
      return result.data;
    }

    * show(params) {
      const result = yield this.ctx.curl(`${this.root}/topic/${params.id}`, {
        dataType: 'json',
      });
      this.checkSuccess(result);
      return result.data;
    }

    * update(params) {
      const result = yield this.ctx.curl(`${this.root}/topics/update`, {
        method: 'post',
        data: params,
        dataType: 'json',
        contentType: 'json',
      });
      this.checkSuccess(result);
      return result.data.topic_id;
    }

    checkSuccess(result) {
      if (result.status !== 200) {
        const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
        this.ctx.throw(result.status, errorMsg);
        return errorMsg;
      }
      if (!result.data.success) {
        this.ctx.throw(500, 'remote response error', { data: result.data });
      }
    }
  }
  return TopicService;
};
