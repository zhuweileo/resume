import Vue from 'vue'
import Vuex from 'vuex'
import AV from "../lib/leancloud"
import getAVUser from "../lib/getAVUser"

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    selected: "profile",
    user: {
      username: "",
      id: ""
    },
    resumeConfig: [
      {pro: 'profile', icon: '#icon-id', itemLen: 1,name:["姓名","职位","城市","生日"]},
      {pro: 'work history', icon: '#icon-work', itemLen: 2,name:["公司","简介"]},
      {pro: 'education', icon: '#icon-book', itemLen: 2,name:["学校","时间"]},
      {pro: 'projects', icon: '#icon-heart', itemLen: 2,name:["项目名称","项目介绍"]},
      {pro: 'awards', icon: '#icon-cup', itemLen: 2,name:["奖项名称","奖项介绍"]},
      {pro: 'contacts', icon: '#icon-phone', itemLen: 2,name:["联系方式","联系号码"]}
    ],
    resume: {}
  },
  mutations: {
    initState(state,payload){
      state.resumeConfig.map((item)=>{
        Vue.set(state.resume,item.pro,[]);
        let empty = [];
        state.resume[item.pro].push(empty);
        //利用模板造一个数据
        item.name.map((name,index)=>{
          // empty[index] = {};
          Vue.set(empty,index,{});
          Vue.set(empty[index],"name",name);
          Vue.set(empty[index],"content","")
        })
      });
      Object.assign(state,payload)
    },
    switchTab(state,payload){
      state.selected = payload;
      localStorage.setItem("state",JSON.stringify(state))
    },
    writeResume(state,payload){
      state.resume[payload.pro][payload.index][payload.index1].content = payload.value;
      localStorage.setItem("state",JSON.stringify(state))
    },
    setUser(state,payload){
      Object.assign(state.user,payload);
      localStorage.setItem("state",JSON.stringify(state));
    },
    clearUser(state){
      state.user.id="";
      localStorage.setItem("state",JSON.stringify(state));
    },
    addItem(state,{pro}){
      let empty = [];
      state.resume[pro].push(empty);
      //取出模板
      let curPro = state.resumeConfig.filter((i)=>{
        return i.pro === pro;
      })[0];
      //利用模板造一个数据
      curPro.name.map((name,index)=>{
        // empty[index] = {};
        Vue.set(empty,index,{});
        Vue.set(empty[index],"name",name);
        Vue.set(empty[index],"content","")
      })
    },
    deleteItem(state,payload){
      state.resume[payload.pro].splice(payload.index,1);
    },
    setResumeId(state,{id}){
      state.resume.id = id;
    },
    setResume(state,resume){
      state.resumeConfig.map(({pro})=>{
        Vue.set(state.resume,pro,resume[pro])
        state.resume.id = resume.id;
      })
    }
  },
  actions:{
    saveResume({state,commit},payload){
      var Resume = AV.Object.extend("Resume");
      if(state.resume.id){
        resume.id = state.resume.id;
      }
      var resume = new Resume();
      resume.set("profile",state.resume.profile);
      resume.set("workHistory",state.resume["work history"]);
      resume.set("education",state.resume.education);
      resume.set("projects",state.resume.projects);
      resume.set("awards",state.resume.awards);
      resume.set("contacts",state.resume.contacts);
      resume.set("ownerId",getAVUser().id);

      var acl = new AV.ACL();
      acl.setPublicReadAccess(true);
      acl.setWriteAccess(AV.User.current(),true);
      resume.setACL(acl);
      resume.save().then(function(response){
        if(!state.resume.id){
          commit("setResumeId",{id:response.id})
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    fetchResume({commit},payload){
      var query = new AV.Query("Resume");
      query.equalTo("ownerId",getAVUser().id)
      query.first().then((resume)=>{
        console.log("*****");
        console.log(resume.attributes);
        commit("setResume",{id:resume.id,...resume.attributes})
      })
    }
  }
})
