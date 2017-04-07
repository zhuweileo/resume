import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    selected:"profile",
    resume:{
      config:[
        {pro:'profile',icon:'#icon-id'},
        {pro:'work history',icon: '#icon-work'},
        {pro:'education',icon:'#icon-book'},
        {pro:'projects',icon:'#icon-heart'},
        {pro:'awards',icon:'#icon-cup'},
        {pro:'contacts',icon:'#icon-phone'}
      ],
      // profile:{
      //   name:'朱维',
      //   city:'鹤壁',
      //   title:'简历',
      //   birthday:'1993-01-01'
      // },
      profile:[
        // {姓名:'朱维',城市:'鹤壁',职位:'前端工程师', 生日:'1993-01-01'}
        {name:"姓名",content:"朱维"},
        {name:"职位",content:"前端工程师"},
        {name:"城市",content:"鹤壁"},
        {name:"生日",content:"1993-01-01"}
      ],
      'work history':[
        // {company:'百度',content:`第一份dsajfkadfaldfjadjfkdjf
        // 1.dkjfkasjd
        // 2.asdfadfas
        // 3.dfadadf`},
        // {company:'ali',content:'第二份'},
        // {company:'tecent',content:'第三份'}
        {name:"公司",content:"百度"},
        {name:"简介",content:"我的第一份工作"},
        {name:"公司",content:"阿里"},
        {name:"简介",content:"我的第二份工作"},
        {name:"公司",content:"腾讯"},
        {name:"简介",content:"我的第三份工作"},
      ],
      education:[
        {school:'齐大',content:'2011-2014'},
        {school:'四中',content:'2011-2014'},
        {school:'五小',content:'2011-2014'}
      ],
      projects:[
        {pro:'music',content:'音乐播放器'},
        {pro:'todoList',content:'todolist应用'},
        {pro:'resume',content:'在线简历制作'}
      ],
      awards:[
        {name:'三好学生',content:''},
        {name:'优秀毕业生',content:''},
        {name:'优秀班干部',content:''}
      ],
      contacts:[
        {contact:'phone',content:'130222222'},
        {contact:'qq',content:'576XXXXXXX'}
      ]
    }

  },
  mutations: {
    switchTab(state,payload){
      state.selected = payload;
    },
    writeResume(state,payload){
      state.resume[payload.pro][payload.index][payload.key] = payload.value;
    }
  }
})
