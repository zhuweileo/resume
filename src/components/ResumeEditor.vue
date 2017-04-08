<template>
  <div id="resumeEditor">
    <nav>
      <ol>
       <li v-for="(item,index) in resume.config"
           v-bind:class="{active:item.pro === selected}"
           @click="selected=item.pro">
         <svg class="icon">
           <use v-bind:xlink:href="item.icon"></use>
         </svg>
       </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config" v-show="selected===item.pro">
          <div class="subitem" v-for="(subitem,index) in resume[item.pro]">
              <label :for="item.pro+index">{{subitem.name}}</label>
              <input type="text" :value="subitem.content" :id="item.pro+index"
              @input="edit(item.pro,index,$event.target.value)"/>
          </div>
      </li>
    </ol>
  </div>
</template>
<script>
  export default{
      name:'ResumeEditor',
      computed:{
          selected:{
              get(){
                return this.$store.state.selected
              },
              set(value){
                return this.$store.commit('switchTab',value)
              }
          },
          resume(){
              return this.$store.state.resume
          }
      },
      methods:{
          edit(pro,index,value){
              this.$store.commit("writeResume",{
                  pro:pro,
                  index:index,
                  value:value
              })
          }
      }
  }
</script>
<style lang="scss">
  ol{
    list-style: none;
  }
  #resumeEditor{
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    background: white;
    margin-right:16px;
    width:35%;
    display:flex;
    flex-direction:row;
    overflow:auto;
    nav {
      background: #000;
      width:80px;
      min-height:670px;
      > ol > li{
        /*width:80px;*/
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
    .panels{
      /*background:orange;*/
      min-height:670px;
      li{
        .subitem:nth-child(1){
          margin-top:24px;
        }

        .subitem{
          display:flex;
          flex-direction:column;
          margin-left:24px;
          margin-right:24px;
          /*margin-bottom:16px;*/

          label{
            font-size:20px;
            color:#333333;
            letter-spacing:0;
            padding:16px 0;
          }
          input{
            background:#ffffff;
            border:1px solid #dddddd;
            box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.25);
            width:374px;
            height:38px;
            font-size:20px;
          }
        }
      }
      li:nth-child(n+2){
        .subitem:nth-child(2n+0){
          border-bottom:1px solid #ccc;
          padding-bottom:10px;
        }
      }
    }
  }

</style>
