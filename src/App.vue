<template>
  <div id="app">
    <header>
      <Topbar/>
    </header>
    <main class="wrapper">
      <ResumeEditor/>
      <ResumePreview/>
    </main>
  </div>
</template>

<script>
import "./assets/reset.css"
import 'normalize.css/normalize.css'
import Topbar from './components/Topbar.vue'
import ResumeEditor from './components/ResumeEditor.vue'
import ResumePreview from './components/ResumePreview.vue'
import icons from './assets/icons'
import store from './store/index'
import AV from "./lib/leancloud"
import getAVUser from "./lib/getAVUser"

export default {
  name: 'app',
  store,
  components: {Topbar,ResumeEditor,ResumePreview},
  created(){
      document.body.insertAdjacentHTML("afterbegin",icons);//引入svg图标
      let state = localStorage.getItem("state");
      if(state){
          state = JSON.parse(state)
      }
      this.$store.commit("initState",{});
      this.$store.commit("setUser",getAVUser());
  }
}
</script>

<style lang="scss">
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  background: #eaebec;
  display:flex;
  flex-direction:column;
  height:100vh;
  min-width:1024px;
  max-width:1440px;
}
  #app>main{
    display:flex;
    flex-grow:1;
    flex-direction:row;
    justify-content: space-around;
    /*margin:0 16px;*/
    margin-top:16px;
    margin-bottom:16px;
    width:100%;
    align-self:center;
    padding:0 16px;
  }
  .button{
    width:72px;
    height:32px;
    border:none;
    font-size:18px;
    background: #ddd;
    color:#222;
    text-decoration:none;
    display:inline-flex;
    justify-content:center;
    align-items:center;
    /*vertical-align: middle;*/
    &:hover{
       box-shadow:1px 1px 1px 1px rgba(0,0,0,.5)
     }
    &.primary{
       background: #02af5f;
       color:white;
       margin-right:16px;
     }
  }
</style>
