<template>
  <div id="topbar">
    <div class="wrapper">
      <span class="logo">Resumer</span>
      <div class="actions">
        <a href="#" class="button primary" @click.prevent="signUpDialogVisible=true">注册</a>
        <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible=false">
          我是slote内容
        </MyDialog>
        <a href="#" class="button">登录</a>
      </div>
    </div>
  </div>
</template>
<script>
  import MyDialog from "./MyDialog.vue"
  export default {
      name:'topbar',
      data(){
          return{
              signUpDialogVisible:false
          }
      },
      components:{
          MyDialog
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
