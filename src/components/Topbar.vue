<template>
  <div id="topbar">
    <div class="wrapper"><span class="logo">Resume</span></div>
    <div class="actions">
      <button class="primary">保存</button><button>预览</button>
    </div>
  </div>
</template>
<script>
  export default {
      name:'topbar'
  }
</script>
<style scoped lang="scss">
  #topbar{
    color:greenyellow;
    height:64px;
    background: #fff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    margin-bottom:14px;
    padding-left:16px;
    padding-right:16px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

     .logo{
        font-size:24px;
        color:#000;
      }
  }
  button{
    width:72px;
    height:32px;
    border:none;
    font-size:18px;
    background: #ddd;
    color:#222;
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
