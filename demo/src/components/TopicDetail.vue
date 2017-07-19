<template>
  <div class="topicDetail">

    <div class="header">
      <span class="title">{{topic.title}}</span>
      <div class="changes">
        <span>
          发布于 {{create_time()}}
        </span>
        <span>
          作者 <a href="#">{{topic.author && topic.author.loginname}}</a>
        </span>
        <span>
          {{topic.visit_count}} 次浏览
        </span>
          <span> 来自 {{tab}}</span>
          <input class="span-common span-success pull-right collect_btn" type="submit" value="收藏" action="collect">
      </div>
    </div>
    <div class="content" v-html="topic.content">

    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'topicDetail',
  created(){
    this.$store.dispatch('showTopic',{axios:this.$axios,id:this.$route.params.index});
  },
  computed: {
    tab(){
      let obj = {
        'good': '精华',
        'dev' : '测试',
        'ask' : '问答'
      }
      return obj[this.topic.tab] || this.topic.tab;
    },
    ...mapGetters(['topic'])
  },
  methods: {
    create_time() {
      let time = +new Date() - +new Date(this.topic.create_at);
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
    ...mapActions(['indexTopic','showTopic','createTopic','updateTopic'])
  }
}
</script>

<style media="screen">
body{
    background: #e1e1e1;
}
.topicDetail .content p{
  font-size: 15px;
  line-height: 1.7em;
  overflow: auto;
  margin: 1em 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.topicDetail .content a{
  color: #08c;
  text-decoration: none;
}
.topicDetail .content code{
  color: #000;
  background-color: #fcfafa;
  padding: 4px 6px;
  font-family: Monaco,Menlo,Consolas,"Courier New",monospace;
  font-size: 12px;
  border-radius: 3px;
}
.topicDetail .content img{
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border: 0;
}
</style>
<style scoped>
a{
  text-decoration: none;
  cursor: pointer;
}
.topicDetail{
  width: 1000px;
  margin: 0 auto;
}
.header{
  background: #fff;
  overflow: hidden;
  padding: 10px;
  border-radius: 3px 3px 0 0;
}
.title {
  float: left;
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0;
  display: inline-block;
  vertical-align: bottom;
  width: 75%;
  line-height: 130%;
  text-align: left;
}
.changes{
  float: left;
  text-align: left;
  font-size: 12px;
  color: #838383;
  width: 100%;
}
.changes span a{
  color: inherit;
}
.changes span::before {
  content: '•';
}
.content{
  background: #fff;
  overflow: hidden;
  padding: 20px;
  border-radius: 3px 3px 0 0;
  border-top: 1px solid #e5e5e5;
  text-align: left;
}
.collect_btn{
  border-radius: 3px;
  background-color: #80bd01;
  border: none;
  display: inline-block;
  float: none;
  padding: 3px 10px;
  margin: 0;
  font-size: 14px;
  transition: all .2s ease-in-out;
  letter-spacing: 2px;
  box-shadow: none;
  line-height: 2em;
  vertical-align: middle;
  width: 52px;
  height: 34px;
  color: #fff;
  float: right;
}
</style>
