<template>
  <div id="topbar">
    <div class="wrapper"><span class="logo">Resume</span></div>
  </div>
</template>
<script>
  export default {
      name:'topbar'
  }
</script>
<style>
  #topbar{
    color:greenyellow;
    height: 64px;
    background: #fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    margin-bottom: 14px;
    padding-left:16px;
  }
  #topbar>.wrapper{
    display:flex;
    align-items: center;
    height:64px;
  }
  #topbar .logo{
    font-size:24px;
    color:#000;
  }
</style>
