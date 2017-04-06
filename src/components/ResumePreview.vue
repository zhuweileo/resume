<template>
  <div id="resumePreview">
    {{resume}}
  </div>
</template>
<script>
  export default{
      name:'resumePreview',
      computed:{
          resume(){
              return this.$store.state.resume
          }
      }
  }
</script>
<style>
  #resumePreview{
    color:yellowgreen;
    width: 65%;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    background: #444;
  }
</style>
