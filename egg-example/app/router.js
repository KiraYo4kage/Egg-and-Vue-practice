'use strict';

module.exports = app => {
  app.get('/home', app.controller.home.index);
  app.redirect('/','/home',302);
  app.resources('topics', '/api/v2/topics', app.controller.topics);
};
