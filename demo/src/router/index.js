import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/List'
import Detail from '@/components/Detail'
import TopicsList from '@/components/TopicsList'
import topicDetail from '@/components/topicDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/',
      name: 'TopicsList',
      component: TopicsList
    },
    {
      path: '/topicDetail/:index',
      name: 'topicDetail',
      component: topicDetail
    },
    {
      path: '/detail/:index',//命名路由
      name: 'Detail',
      component: Detail
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
