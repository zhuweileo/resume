<template>
  <div id="resumePreview">
    <section data-name="profile" v-if="resume.profile&&resume.profile.length>0">
      <h1>{{resume.profile[0][0].content}}</h1>
      <h2>{{resume.profile[0][1].content}}</h2>
      <p>
        <small>{{resume.profile[0][2].content}}</small>
        <small>{{resume.profile[0][3].content}}</small>
      </p>
    </section>
    <section data-name="workHistory" v-if="resume.workHistory&&resume.workHistory.length>0">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume.workHistory">
          <h3>{{item[0].content}}</h3>
          <p>{{item[1].content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="education" v-if="resume.education&&resume.education.length>0">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>{{item[0].content}}
            <span v-show="item[1].content"> - {{item[1].content}}</span>
          </h3>
        </li>
      </ol>
    </section>
    <section data-name="projects" v-if="resume.projects&&resume.projects.length>0">
      <h2>项目经历</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h3>{{item[0].content}}</h3>
          <p>{{item[1].content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="awards" v-if="resume.awards&&resume.awards.length>0">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h3>{{item[0].content}}</h3>
          <p>{{item[1].content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="contacts" v-if="resume.contacts&&resume.contacts.length>0">
      <h2>联系方式</h2>
      <table>
        <tr v-for="item in resume.contacts">
          <td>{{item[0].content}}</td>
          <td>{{item[1].content}}</td>
        </tr>
      </table>
    </section>
  </div>
</template>
<script>
  export default{
      name:'resumePreview',
      computed:{
          resume(){
              return this.$store.state.resume
          }
      },
      methods:{

      }
  }
</script>
<style lang="scss">
  #resumePreview{
    color:#222;
    width: 65%;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    background: #fff;
    padding:2em;
    line-height:1.2;
    overflow:auto;
    h1,h2,h3{font-weight:normal;}
    section + section{ margin-top: 2em; }
    p{
      white-space:pre-line;//保留文本中的换行符
    }
    section{
      >h2:first-child{background: #ddd; display: inline-block; padding: .2em;margin-bottom: .5em;}
    }
    section[data-name="profile"]{
      >h1{margin: .1em 0; font-size: 4em;}
    }
    section[data-name="workHistory"],
    section[data-name="projects"],
    section[data-name="awards"]{
      li+li{margin-top:1em}
      li{
        h3{border-bottom: 1px solid #999; padding-bottom: .3em; margin-bottom: .3em;}
      }
    }
    section[data-name="education"]{
      li{line-height:1.5;}
    }
  }
</style>
