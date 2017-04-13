<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <div v-if="logined" class="useractions">
          <span>你好，{{user.username}}!</span>
          <a href="#" class="button">登出</a>
        </div>
        <div v-else class="useractions">
          <a href="#" class="button primary" @click.prevent="signUpDialogVisible=true">注册</a>
          <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible=false">
            <SignUpForm @success="login"/>
          </MyDialog>
          <a href="#" class="button">登录</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import MyDialog from "./MyDialog.vue"
  import SignUpForm from "./SignUpForm.vue"
  export default {
      name:'topbar',
      data(){
          return{
              signUpDialogVisible:false
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
          MyDialog,SignUpForm
      },
      methods:{
          login(user){
              console.log("woshi");
              console.log(user);
              this.signUpDialogVisible = false;
              this.$store.commit("setUser",user)
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
    &.primary{//&代表父元素
      background: #02af5f;
      color:white;
      margin-right:16px;
    }
  }
</style>
