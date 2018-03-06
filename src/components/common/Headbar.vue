<template>
  <div class="headbar">
      <!--左侧-->
      <div class="head_left relative">
          <a href="01_superAdmin.html" class="head_left_title_href">
          </a>
          <ul>
              <li class="head_left_li1"><a href="" class="head_left_lia"></a></li>
              <li class="head_left_li2"></li>
              <li class="head_left_li3">NEXVISION</li>
              <li class="head_left_li4">网呈智能会议管理平台</li>
          </ul>
      </div>
      <!--右侧-->
      <div class="head_right">
          <ul >
              <li class="head_right_li6" id="meet_set" @mouseleave="manager_mouseleave()">
                      <span class="head_right_span1" @click="manager_click()">会议挂你</span>
                      <span class="head_right_span2"></span>
                      <!--会议管理弹窗-->
                      <div class="popup" id="meetpopup" v-show="meeting_manger">
                          <ul>
                              <li>
                                  <router-link to="/home/meetingList">
                                      <a @click="manager_mouseleave()">会议管理</a>
                                  </router-link>
                              </li>
                              <li>
                                  <router-link to="/home/systemManager">
                                      <a @click="manager_mouseleave()">系统管理</a>
                                  </router-link>
                              </li>
                              <li>
                                  <a @click="manager_mouseleave()">信息发布</a>
                              </li>
                          </ul>
                      </div>
              </li>
              <li class="head_right_li1"></li>
              <li class="head_right_li2">用户名</li>
              <li class="head_right_li_common"><a href="" id="email_popup" class="head_right_lia_common head_right_li3a"></a></li>
              <li class="head_right_li_common" @mouseleave="setup_mouseleave()">
                  <span id="set_up" class="head_right_lia_common head_right_li4a" @click="setup_click()"></span>
                  <!--设置弹窗-->
                  <div class="popup" id="setpopup" v-show="meeting_setup">
                      <ul>
                          <li><a href="">个人信息</a></li>
                          <li><a href="">头像修改</a></li>
                          <li><a href="">密码修改</a></li>
                          <li><a href="">帮助信息</a></li>
                          <li><a href="">关于</a></li>
                      </ul>
                  </div>
              </li>
              <li class="head_right_li_common"><a href="" class="head_right_lia_common head_right_li5a"></a></li>
          </ul>

          <!--邮件通知弹窗-->
          <div class="email_popup">
              <ul class="email_popup_item">
                  <li>
                      <span>系统告警</span>
                      <span class="right common_item1"><img src="../../static/images/common_dele.jpg" alt=""></span>
                  </li>
                  <li>
                      <span>视讯4F-会议室1 会议设备 连接异常</span>
                      <span class="right common_item2"><img src="../../static/images/common_right_arrow.jpg" alt=""></span>
                  </li>
              </ul>
              <ul class="email_popup_item">
                  <li>
                      <span>会议通知</span>
                      <span class="right common_item1"><img src="../../static/images/common_dele.jpg" alt=""></span>
                  </li>
                  <li>
                      <span>123456 邀请你参加：UCD例会</span>
                      <span class="right common_item2"><img src="../../static/images/common_right_arrow.jpg" alt=""></span>
                  </li>
                  <li>
                      <span>123456 邀请你参加：UCD例会</span>
                      <span class="right common_item2"><img src="../../static/images/common_right_arrow.jpg" alt=""></span>
                  </li>
                  <li>
                      <span>123456 邀请你参加：UCD例会</span>
                      <span class="right common_item2"><img src="../../static/images/common_right_arrow.jpg" alt=""></span>
                  </li>
                  <li>
                      <span>123456 邀请你参加：UCD例会</span>
                      <span class="right common_item2"><img src="../../static/images/common_right_arrow.jpg" alt=""></span>
                  </li>
              </ul>
              <ul class="email_popup_item">
                  <li>
                      <span>会务通知</span>
                      <span class="right common_item1"><img src="../../static/images/common_dele.jpg" alt=""></span>
                  </li>
                  <li>
                      <span>视讯4F-会议室1 王大锤 需要更换茶水 需要更换茶水需要更换茶水需要更换茶水需要更换茶水</span>
                      <span class="right common_item2"><img src="../../static/images/common_right_arrow.jpg" alt=""></span>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>
<style scoped>
    @import '../../static/css/common/Chead&foot.css';
</style>
<script>
    export default{
        data(){
            return{
                meeting_manger:false,
                meeting_setup:false,
                headnav:this.geturl(),
            }
        },
        methods:{
//            会议管理弹窗
            manager_click:function(){
                this.meeting_manger=true;
            },
            manager_mouseleave:function(){
                this.meeting_manger=false;
            },
//            设置弹窗
            setup_click:function(){
                this.meeting_setup=true;
            },
            setup_mouseleave:function(){
                this.meeting_setup=false;
            },
            geturl:function(){
                var url=this.$route.matched;
                console.log(url);
                var start=url.lastIndexOf("/");
                var menu=url.slice(start+1);
                console.log(this);
                var html="";
                switch(menu){
                    case "meetingList" :
                        html="会议管理";
                        break;
                    case "systemManager":
                        html="系统管理";
                        break;
                }
                return html;
            }
        },
        beforeRouteUpdate (to, from, next) {
            if (to.matched.some(record => record.meta.check)) {
                console.log(1);
                next();
            }else {
                next();
            }
        },
    }
</script>