import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    selected:"profile",
    user:{
      username:"",
      id:""
    },
    resume:{
      config:[
        {pro:'profile',icon:'#icon-id'},
        {pro:'work history',icon: '#icon-work'},
        {pro:'education',icon:'#icon-book'},
        {pro:'projects',icon:'#icon-heart'},
        {pro:'awards',icon:'#icon-cup'},
        {pro:'contacts',icon:'#icon-phone'}
      ],
      profile:[
        [{name:"姓名",content:"朱维"}],
        [{name:"职位",content:"前端工程师"}],
        [{name:"城市",content:"鹤壁"}],
        [{name:"生日",content:"1993-01-01"}]
      ],
      'work history':[
        [{name:"公司",content:"百度"},
        {name:"简介",content:"我的第一份工作"}],
        [{name:"公司",content:"阿里"},
        {name:"简介",content:"我的第二份工作"}],
        [{name:"公司",content:"腾讯"},
        {name:"简介",content:"我的第三份工作"}]
      ],
      education:[
        [{name:'学校',content:'齐大'},
        {name:'时间',content:'2011-2014'}],
        [{name:'学校',content:'铃兰一中'},
        {name:'时间',content:'2011-2014'}],
        [{name:'学校',content:'乖宝宝小学'},
        {name:'时间',content:'2011-2014'}]
      ],
      projects:[
        [{name:'项目名称',content:'音乐播放器'},
        {name:'项目介绍',content:'广场舞助手'}],
        [{name:'项目名称',content:'todoList'},
        {name:'项目介绍',content:'可以记录你的要做的事情哦！'}],
        [{name:'项目名称',content:'简历生成器'},
        {name:'项目介绍',content:'可以制作简历哦'}]
      ],
      awards:[
        [{name:'奖项名称',content:'最会装逼奖'},
        {name:'奖项介绍',content:'多次装逼后自动添加'}],
        [{name:'奖项名称',content:'艾美奖'},
        {name:'奖项介绍',content:'获得第101届艾美奖'}],
      ],
      contacts:[
        [{name:'联系方式',content:'qq'},
        {name:'号码',content:'576XXXXXXX'}],
        [{name:'联系方式',content:'电话'},
        {name:'号码',content:'126XXXXXXX'}]
      ]
    }

  },
  mutations: {
    initState(state,payload){
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
      Object.assign(state.user,payload)
      console.log(state.user)
    }
  }
})
