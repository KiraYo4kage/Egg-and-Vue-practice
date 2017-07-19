export default {

  init(state,data){
    state.rows = data;
  },

  add(state) {
    state.add.name && state.add.sex && state.rows.push(state.add);
  },

  delete(state,index) {//向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
    state.rows.splice(index,1);
  },

  save(state,index) {
    Object.assign(state.rows[index],state.save)
  },

  indexTopic(state,data) {
    state.topics = data;
  },

  toggleTab(state,data){
    state.tab = data;
  },

  showTopic(state,data){
    state.topic = data;
  }
}
