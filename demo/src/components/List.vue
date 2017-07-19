<template>
  <div class="list">

    <div class="add-row border-bottom">
      <input type="text" v-model="add.name"/>
      <select class="" name="" v-model="add.sex">
        <option value="">please choose</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <button type="button" @click='addRows'>add</button>
    </div>

    <div class="table">
      <div class="title-row border-bottom">
        <span class='flex-1'>name</span>
        <span class='flex-1'>sex</span>
        <span class='flex-2'>operate</span>
      </div>
      <template v-for='(row,index) in rows'>
        <div :class="'item-row ' + (index < rows.length - 1 ? 'border-bottom' : '')">
          <span class='flex-1'>{{row.name}}</span>
          <span class='flex-1'>{{row.sex}}</span>
          <span class='flex-2'>
            <button type="button" @click='updateRows({router:$router,url,index})'>detail</button>
            <button type="button" @click='deleteRows(index)'>delete</button>
          </span>
        </div>
      </template>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'list',
  created(){
    this.getData(this.$axios);
  },
  computed: mapGetters(['url','add','rows']),//辅助函数，返回一个对象，包含指定getters中的方法
  methods: mapActions(['getData','addRows','updateRows','deleteRows'])// 映射 this.addRows() 为 this.$store.dispatch('addRows'),分发actions
}
</script>


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
}
.title-row,.item-row{
  display: flex;
  padding: 10px 0;
}
.title-row{
  background: #ccc;
}
.flex-1{
  flex: 1;
}
.flex-2{
  flex: 2;
}
.border-bottom{
  border-bottom: 1px solid #ccc;
}
.border-right{
  border-right: 1px solid #ccc;
}
span{
  display: inline-block;
}
</style>
