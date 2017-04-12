<template>
  <div>
    <form @submit.prevent="signUp">
      <div class="raw">
        <label for="">用户名</label>
        <input type="text" v-model="formData.username">
      </div>
      <div class="raw">
        <label for="">密码</label>
        <input type="password" v-model="formData.password">
      </div>
      <div class="action">
        <input type="submit" value="注册">
      </div>
    </form>
  </div>
</template>
<script>
  import AV from "../lib/leancloud"
  export default {
    name:"SignUpForm",
    data(){
      return {
        formData:{
          username:"",
          password:""
        }
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
           console.log(error)
        });
      }
    }
  }
</script>
<style>

</style>
