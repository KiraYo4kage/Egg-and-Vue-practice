module.exports = (options,app) => {
  const reportTime = time => app.logger.info(time/1000 + '秒')

  return function* (next) {
    const startTime = Date.now();
    yield next;
    // 上报请求时间
    reportTime(Date.now() - startTime);
  }
};
