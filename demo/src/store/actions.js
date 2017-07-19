export default {
  jumpToDetail: (context,{axios,router,id}) => {
    router.push({name:'topicDetail',params:{index:id}});
  },

  indexTopic: ({commit},{axios,index}) => {
    axios({
      method: 'get',
      url: '/api/api/v2/topics',//相当于调用resources中的index,path为topics
      params: {
        tab: index
      }
    }).then(res => {
      if(res && res.data && res.data.success){
        commit('indexTopic',res.data.data);
        commit('toggleTab',index);
      }
    });
  },
  showTopic: ({commit},{axios,id}) => {
    axios({
      method: 'get',
      url: '/api/api/v2/topics/' + id//相当于调用resources中的show,path为topics/:id
    }).then(res => {
      if(res && res.data && res.data.success){
        commit('showTopic',res.data.data);
      }
    });
  },

  createTopic: ({commit},axios) => {
    let csrfToken = document.cookie.split('csrfToken=')[1].split('&')[0];
    axios({
      method: 'post',
      url: '/api/api/v2/topics',//相当于调用resources中的create,path为topics
      // url: 'https://cnodejs.org/api/v1/topics',
      data:{
        accesstoken: '78d884a2-1900-4cd0-bbf9-c96cf4c9a1e1',
        title: 'yyj',
        content: 'content',
        tab: 'dev',
        _csrf: csrfToken
      },
      contentType: 'application/json'
    });
  },

  updateTopic: ({commit},axios) => {
    let csrfToken = document.cookie.split('csrfToken=')[1].split('&')[0];
    axios({
      method: 'put',
      url: '/api/api/v2/topics/update',//相当于调用resources中的create,path为topics
      // url: 'https://cnodejs.org/api/v1/topics',
      data:{
        accesstoken: '78d884a2-1900-4cd0-bbf9-c96cf4c9a1e1',
        title: 'yyj update',
        content: 'update',
        tab: 'dev',
        topic_id: '59643ae8d1d54a0a0890b689',
        _csrf: csrfToken
      },
      contentType: 'application/json'
    });
  },

  getData: ({commit},axios) => {
    axios.get('../../static/data.json',{
        dataType: 'json'
      }).then(res => {
      if( res && res.data ){
        let data = res.data.data
        commit('init',data)
      }
    });
  },

  //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
  addRows: ({commit}) => commit('add'),//参数解构，直接调用commit触发mutations，否则要用context.commit

  updateRows: (context,{router,url,index}) => router.push({name:url,params:{index}}),//actions只接受两个参数，因此入参全部放到一个对象中；router对象在组件中传入

  deleteRows: ({commit},index) => confirm('comfirm to delete?') && commit('delete',index),//payload中要传多个参数，推荐是传一个对象
  //也可以写成对象风格
  // commit({
  //   type: 'delete',
  //   index
  // })

  saveRows: ({commit},index) => commit('save',index) || alert('success!'),

  back: (context,router) => router.push('/')

}
