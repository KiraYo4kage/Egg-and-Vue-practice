<template>
  <div class="topicsList">

    <div class="table">
      <div class="title-row border-bottom">
        <a href="#" :class="'topic-tab' + (tab === '' ? ' current-tab' : '')" @click="indexTopic({axios:$axios,index:''})">全部</a>
        <a href="#" :class="'topic-tab' + (tab === 'good' ? ' current-tab' : '')" @click="indexTopic({axios:$axios,index:'good'})">精华</a>
        <a href="#" :class="'topic-tab' + (tab === 'dev' ? ' current-tab' : '')" @click="indexTopic({axios:$axios,index:'dev'})">客户端测试</a>
      </div>
      <template v-for='(row,index) in topics'>
        <div :class="'item-row ' + (index < topics.length - 1 ? 'border-bottom' : '')">
          <div class="cell">

            <a class="user_avatar pull-left" href="#">
              <img :src="row.author.avatar_url" :title="row.author.loginname">
            </a>

            <span class="reply_count pull-left">
              <span class="count_of_replies" title="回复数">
                {{row.reply_count}}
              </span>
              <span class="count_seperator">/</span>
              <span class="count_of_visits" title="点击数">
                {{row.visit_count}}
              </span>
            </span>

            <a class="last_time pull-right">
              <span class="last_active_time">{{last_time2(index)}}</span>
            </a>

            <div class="topic_title_wrapper">
              <a class="topic_title" href="javascript:;" :title="row.title" @click="jumpToDetail({axios:$axios,router:$router,id:row.id})">
                {{row.title}}
              </a>
            </div>

          </div>
        </div>
      </template>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'topicsList',
  created(){
    this.indexTopic({axios:this.$axios,index:this.tab});
    // this.showTopic(this.$axios);
    // this.createTopic(this.$axios);
    // this.updateTopic(this.$axios);
  },
  computed: mapGetters(['topics','tab']),
  methods: {
    last_time(index) {
      if(!this.topics.length) return '刚刚';
      let time = +new Date() - +new Date(this.topics[index].last_reply_at);
      switch(true){
        case (time / (3600000 * 24 * 30) >= 1):
          return parseInt(time / (3600000 * 24 * 30)) + '个月前';
        case (time / (3600000 * 24) >= 1):
          return parseInt(time / (3600000 * 24)) + '天前';
        case (time / 3600000 >= 1):
          return parseInt(time / 3600000) + '小时前';
        case (time / 60000 >= 1):
          return parseInt(time / 60000) + '分钟前';
        default:
          return '刚刚';
      }
    },
    last_time2(index) {
      return this.$moment(this.topics[index].last_reply_at).fromNow()
    },
    ...mapActions(['indexTopic','showTopic','createTopic','updateTopic','jumpToDetail'])
  }
}
</script>

<style media="screen">
body{
    background: #e1e1e1;
}
</style>
<style scoped>
.add-row{
  margin: 20px auto;
  width: 800px;
  padding: 20px 0;
}
.table{
  display: flex;
  width: 800px;
  margin: 20px auto;
  flex-direction: column;
  background: #fff;
}
.title-row,.item-row{
  display: flex;
  padding: 10px 0;
}
.title-row{
  background: #f6f6f6;
}
.flex-1{
  flex: 1;
}
.flex-2{
  flex: 2;
}
.border-bottom{
  border-bottom: 1px solid #f0f0f0;
}
.border-right{
  border-right: 1px solid #f0f0f0;
}
span{
  display: inline-block;
}
a{
  text-decoration: none;
  color: #333;
  cursor: pointer;
}
.topic-tab {
    margin: 0 10px;
    color: #80bd01;
    font-size: 14px;
    padding: 3px 4px;
}
.topic-tab.current-tab {
    background-color: #80bd01;
    color: #fff;
    border-radius: 3px;
}
.cell {
    position: relative;
    padding: 0 10px 0 10px;
    font-size: 14px;
    flex:1;
    line-height: 2em;
}
#content .changes, .cell, .unstyled li div, .user_name, a.dark, a.topic_title {
    overflow: hidden;
}
.user_avatar{
  height: 30px;
}
.user_avatar img, .user_big_avatar img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
}
.cell .reply_count {
    width: 70px;
    display: inline-block;
    text-align: center;
}
.pull-left {
    float: left;
}
.cell .count_of_replies {
    color: #9e78c0;
}
.cell .count_seperator {
    margin: 0 -3px;
    font-size: 10px;
}
.cell .count_of_visits {
    font-size: 10px;
    color: #b4b4b4;
}
.pull-right {
    float: right;
}
.last_time {
    font-size: 11px;
    display: inline-block;
    margin-left: 20px;
    color: #777;
}
.topic_title_wrapper {
    white-space: nowrap;
}

.panel .inner .unstyled li div, .topic_title_wrapper, .user_name, a.dark, a.topic_title {
    text-overflow: ellipsis;
}

a.topic_title {
    max-width: 70%;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    line-height: 30px;
    color: #333;
    float: left;
}
</style>
