<template>
  <div id="topbar">
    <div class="wrapper">
      <div class="logo-save">
        <span class="logo">Resumer</span>
        <span class="iconfont icon-Icon-baocun" @click="save"></span>
      </div>
      <div class="actions">
        <div v-if="logined" class="useractions">
          <span>你好，{{user.username}}!</span>
          <a href="#" class="button" @click.prevent="logout">登出</a>
        </div>
        <div v-else class="useractions">
          <a href="#" class="button primary" @click.prevent="signUpDialogVisible=true">注册</a>
          <a href="#" class="button" @click.prevent="loginDialogVisible=true">登录</a>
        </div>
        <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible=false">
          <SignUpForm @success="login"/>
        </MyDialog>
        <MyDialog title="登录" :visible="loginDialogVisible" @close="loginDialogVisible=false">
          <LoginForm @success="login"/>
        </MyDialog>
      </div>
    </div>
  </div>
</template>
<script>
  import MyDialog from "./MyDialog.vue"
  import SignUpForm from "./SignUpForm.vue"
  import LoginForm from "./LoginForm.vue"
  import AV from "../lib/leancloud"
  export default {
      name:'topbar',
      data(){
          return{
              signUpDialogVisible:false,
              loginDialogVisible:false
          }
      },
      computed:{
          user(){
            return this.$store.state.user
          },
          logined(){
            return this.user.id
          }
      },
      components:{
          MyDialog,SignUpForm,LoginForm
      },
      methods:{
          login(user){
              this.signUpDialogVisible = false;
              this.loginDialogVisible = false;
              this.$store.commit("setUser",user)
          },
          logout(){
              AV.User.logOut();
              this.$store.commit("clearUser");
              this.$store.commit("initState",{});
          },
          save(){
            this.$store.dispatch("saveResume")
          }
      }
  }
</script>
<style scoped lang="scss">
  #topbar{
    background: #fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    >.wrapper{
      height:64px;
      padding-left:16px;
      padding-right:16px;
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:space-between;
    }
     .logo{
        font-size:24px;
        color:#000;
      }
    .icon-Icon-baocun{
      color:#000;
      font-size:20px;
      &:before {
        content: "\e602";
        margin-left:20px;
        cursor:pointer;
      }
      &:hover{color:rgba(0,0,0,.5)}
    }
  }

</style>
