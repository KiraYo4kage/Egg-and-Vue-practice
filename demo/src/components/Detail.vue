<template>
  <div class="detail">
    <div v-for='(v,i) in save' :key='i' class='item-row'>
      <label class='flex-1' :for="i">{{i}}:</label>
      <input class='flex-1' type="text" :name='i' v-model='save[i]'/>
    </div>
    <div>
      <button type="button" class="save" @click='saveRows(index)'>save</button>
      <button type="button" class="back" @click='back($router)'>back</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'detail',
  computed: {
    ...mapGetters(['rows','save']),//es6语法,扩展运算符。相当于 rows:mapGetters(['rows']).rows,save:mapGetters(['save']).save
    index() {
      return this.$route.params.index//保存路由参数
    },
    row() {
      return this.rows[this.index]
    }
  },
  created(){
    Object.assign(this.save,this.row)//初始化save; Object.assign拷贝对象属性
  },
  methods: mapActions(['addRows','updateRows','deleteRows','saveRows','back'])
}
</script>


<style scoped>
button{
  margin: 10px auto;
}
.add-row{
  margin: 20px auto;
  width: 800px;
  padding: 20px 0;
}
.detail{
  display: flex;
  width: 500px;
  margin: 20px auto;
  flex-direction: column;
}
.item-row{
  display: flex;
  padding-bottom: 10px;
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
</style>
