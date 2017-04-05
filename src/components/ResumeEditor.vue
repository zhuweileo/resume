<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li class="active">7</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ol>
    </nav>
    <ol class="panels">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
    </ol>
  </div>
</template>
<script>
  export default{
      name:'ResumeEditor'
  }
</script>
<style lang="scss">
  ol{
    list-style: none;
  }
  #resumeEditor{
    color:red;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    background: white;
    margin-right:16px;
    width:35%;
    display:flex;
    flex-direction:row;
    nav {
      background: #000;
      width: 80px;
        > ol > li {
        height: 48px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 16px 0;
        &.active {
          background: white;
          color: black;
        }
      }
    }
  }

</style>
