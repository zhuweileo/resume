<template>
  <div id="resumePreview">
    <section data-name="profile" v-show="resume.profile">
      <h1>{{resume.profile[0].content}}</h1>
      <h2>{{resume.profile[1].content}}</h2>
      <p>
        <small>{{resume.profile[2].content}}</small>
        <small>{{resume.profile[3].content}}</small>
      </p>
    </section>
    <section data-name="work history" v-show="resume['work history']">
      <h2>工作经历</h2>
      <ol>
        <li v-for="item in resume['work history']">
          <h3>{{item.company}}</h3>
          <p>{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="education" v-show="resume.education">
      <h2>毕业院校</h2>
      <ol>
        <li v-for="item in resume.education">
          <h3>{{item.school}}
            <span v-show="item.content"> - {{item.content}}</span>
          </h3>
        </li>
      </ol>
    </section>
    <section data-name="projects" v-show="resume.projects">
      <h2>项目经历</h2>
      <ol>
        <li v-for="item in resume.projects">
          <h3>{{item.pro}}</h3>
          <p>{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="awards" v-show="resume.awards">
      <h2>获奖情况</h2>
      <ol>
        <li v-for="item in resume.awards">
          <h3>{{item.name}}</h3>
          <p>{{item.content}}</p>
        </li>
      </ol>
    </section>
    <section data-name="contacts" v-show="resume.contacts">
      <h2>联系方式</h2>
      <table>
        <tr v-for="item in resume.contacts">
          <td>{{item.contact}}</td>
          <td>{{item.content}}</td>
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
      }
  }
</script>
<style lang="scss">
  #resumePreview{
    color:yellowgreen;
    width: 65%;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    background: #444;
    padding:2em;
    line-height:1.2;
    overflow:auto;
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
    section[data-name="work history"],
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
