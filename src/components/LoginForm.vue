<template>
  <div>
    <form @submit.prevent="login">
      <div class="row">
        <label for="">用户名</label>
        <input type="text" required v-model="formData.username">
      </div>
      <div class="row">
        <label for="">密码</label>
        <input type="password" required v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit">
        <span>{{errMsg}}</span>
      </div>
    </form>
  </div>
</template>
<script>
  import AV from "../lib/leancloud"
  import getErrorMessage from "../lib/getErrorMessage"
  import getAVUser from "../lib/getAVUser"

  export default {
      name:"LoginForm",
      data(){
          return {
              formData:{
                  username:"",
                  password:""
              },
              errMsg:""
          }
      },
      methods:{
          login(){
              let {username,password} = this.formData;
              AV.User.logIn(username,password).then(()=>{
                  this.$store.commit("setUser",getAVUser());
              },(error)=>{
                  this.errMsg = getErrorMessage(error);
              })
          }
      }
  }
</script>
<style>

</style>
