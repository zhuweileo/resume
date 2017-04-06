<template>
  <div id="resumeEditor">
    <nav>
      <ol>
       <li v-for="(item,index) in resume.config"
           :class="{active:item.pro === selected}"
           @click="selected=item.pro">
         <svg class="icon">
           <use :xlink:href="`#icon-${item.icon}`"></use>
         </svg>
       </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config" v-show="selected===item.pro">
        {{resume[item.pro]}}
      </li>
    </ol>
  </div>
</template>
<script>
  export default{
      name:'ResumeEditor',
      data(){
        return {
            selected:"profile",
            resume:{
                config:[
                  {pro:'profile',icon:'id'},
                  {pro:'work history',icon: 'work'},
                  {pro:'education',icon:'book'},
                  {pro:'prjects',icon:'heart'},
                  {pro:'awards',icon:'cup'},
                  {pro:'contacts',icon:'phone'}
                ],
                profile:{
                    name:'',
                    city:'',
                    title:''
                },
                'work history':["1"],
                education:["2"],
                projects:["3"],
                awards:[],
                contacts:[],
            }
          }
      }
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
    overflow:auto;
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
        cursor: pointer;
        &.active {
          background: white;
          color: black;
        }
          svg.icon{
            width:24px;
            height:24px;
            fill:currentcolor;
          }
      }
    }
  }

</style>
