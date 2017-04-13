<template>
  <div>
    <form @submit.prevent="signUp">
      <div class="raw">
        <label for="">用户名</label>
        <input type="text" v-model="formData.username" required>
      </div>
      <div class="raw">
        <label for="">密码</label>
        <input type="password" v-model="formData.password" required>
      </div>
      <div class="action">
        <input type="submit" value="注册">
        <span class="errMsg">{{errMsg}}</span>
      </div>
    </form>
  </div>
</template>
<script>
  import AV from "../lib/leancloud"
  import getErrorMessage from "../lib/getErrorMessage"
  export default {
    name:"SignUpForm",
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
      signUp(){
        let {username,password} = this.formData;
        var user = new AV.User();
        user.setUsername(username);
        user.setPassword(password);
        user.signUp().then((loginedUser)=>{
            this.$emit("success",{
                username:loginedUser.attributes.username,
                id:loginedUser.id
            })
        },(error)=>{
//          console.log(Object.getOwnPropertyNames(error))
          this.errMsg = getErrorMessage(error)
//          console.log(error.message)
        });
      }
    }
  }
</script>
<style>

</style>
