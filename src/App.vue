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
  name: 'Resumer',
  store,
  components: {Topbar,ResumeEditor,ResumePreview},
  created () {
      document.body.insertAdjacentHTML("afterbegin",icons);//引入svg图标
//      let state = localStorage.getItem("state");
//      if(state){
//          state = JSON.parse(state)
//      }
      console.log("@@@@@@")
      console.log(AV.User.current());
      console.log("!!!!!")
      console.log(getAVUser());
      if(getAVUser().id){
        //之前有登录的用户，就将登录的用户保存，并获取他的简历
        this.$store.commit("setUser",getAVUser());
        this.$store.dispatch("fetchResume");
      }else{
        //如果没有已登录用户，就初始化一个空白简历
        this.$store.commit("initState",{})
      }

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
