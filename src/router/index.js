import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SuperAdmin from '@/components/SuperAdmin'
import MeetingList from '@/components/MeetingList'
import meetinglist_main from '@/components/single_page/meetinglist_main'
import meetinglist_createmeeting from '@/components/single_page/meetinglist_createmeeting'
import system_manager_equipment from '@/components/SystemManagerEquipment'
Vue.use(Router);

export default new Router({
  routes: [
      {
          path: "/", redirect: "/home"
      },
    {
      path:'/home',
      name:'home',
      component:Home,
      children:[
            {
              path:'',
              component:SuperAdmin
            },
            {
              path:'meetingList',
              component:MeetingList,
              meta:{
                  check:true,
                  headnav:"会议管理"
              },
              children:[
                  {
                      path:'',
                      component:meetinglist_main
                  },
                  {
                    path:'createMeeting',
                    component:meetinglist_createmeeting,
                    meta:{navshow:true}
                  }
              ]
            },
            {
                path:'systemManager',
                component:system_manager_equipment,
                meta:{
                    check:true,
                    headnav:"系统管理",
                },
                children:[
                    {
                        path:'',
                    }
                ]
            }
        ]
    },
  ]
})
