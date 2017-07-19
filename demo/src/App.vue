<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive include="list">
    <router-view></router-view>
</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input,select{
  display: inline-block;
  box-sizing: border-box;
  width: 200px;
  height: 30px;
  padding: 0 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
button{
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
  width: 50px;
  height: 20px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  outline: none;
  background: #fff;
  color: #3385ff;
}
button:hover{
  color: #fff;
  background: #317ef3;
}
button:active{
  color: #fff;
  background: #aaa;
}
</style>
