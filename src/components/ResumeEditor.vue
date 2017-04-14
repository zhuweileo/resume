<template>
  <div id="resumeEditor">
    <nav>
      <ol>
       <li v-for="(item,index) in resumeConfig"
           v-bind:class="{active:item.pro === selected}"
           @click="selected=item.pro">
         <svg class="icon">
           <use v-bind:xlink:href="item.icon"></use>
         </svg>
       </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resumeConfig" v-show="selected===item.pro">
          <div class="subitem" v-for="(subitem,index) in resume[item.pro]">
            <div v-if="item.pro!=='profile'">
              <button class="button" @click="deleteOne(item.pro,index)">删除</button>
            </div>
            <div class="labInp" v-for="(cell,index1) in subitem">
              <label :for="item.pro+index+index1">{{cell.name}}</label>
              <input type="text" :value="cell.content" :id="item.pro+index+index1"
              @input="edit(item.pro,index,index1,$event.target.value)"/>
            </div>
          </div>
          <div v-if="item.pro!=='profile'">
            <button class="button" @click="addOne(item.pro)">添加</button>
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
          },
          resumeConfig(){
              return this.$store.state.resumeConfig
          }
      },
      methods:{
          edit(pro,index,index1,value){
              this.$store.commit("writeResume",{
                  pro:pro,
                  index:index,
                  index1:index1,
                  value:value
              })
          },
          addOne(pro){
              this.$store.commit("addItem",{pro})
          },
          deleteOne(pro,index){
              this.$store.commit("deleteItem",{pro,index})
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
    nav{
      background: #000;
      /*width:80px;*/
      min-height:600px;
      > ol > li{
        width:80px;
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
      flex-grow:1;
      li{
        margin:8px 24px;
        .labInp{
          label{
            display:block;
            font-size:20px;
            color:#333333;
            letter-spacing:0;
            padding:16px 0;
          }
          input{
            background:#ffffff;
            border:1px solid #dddddd;
            box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.25);
            width:100%;
            height:38px;
            font-size:20px;
          }
        }
      }
      li:nth-child(n+2){
        .subitem{
          border-bottom:1px solid #ccc;
          padding-bottom:10px;
        }
      }
    }
  }

</style>
