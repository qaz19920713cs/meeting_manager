<template>
    <div class="main">
        <!--主体上部分-->
        <div class="super_main_top clear">
            <!--上部分左侧-->
            <div class="main_top_left main_top_common">
            </div>
            <!--上部分右侧-->
            <div class="main_top_right main_top_common">
                <ul class="clear">
                    <li>
                        <router-link to="/home/meetingList">
                            <span class="top_right_metcot top_right_metcommon">
                                <span class="top_right_metcommon top_right_metcot1"></span>
                            </span>
                            <p class="top_right_world">会议管理</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/home/systemManager">
                            <span class="top_right_metcot top_right_metcommon">
                                <span class="top_right_metcommon top_right_syscot"></span>
                            </span>
                            <p class="top_right_world">系统管理</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!--主体下部分-->
        <div class="super_main_bottom clear">
            <!--下部分左侧-->
            <div class="main_top_left left">
                <p>
                    <span class="main_bottom_left1">会议日程</span>
                    <a href="02_01_00_creatMeeting.html" class="main_bottom_left2">
                        创建会议
                        <span class="main_bottom_left3"></span>
                    </a>
                </p>
            </div>
            <!--下部分右侧-->
            <div class="main_bottom_right left">
                <ul class="clearfix bottom_right_ul">
                    <li class="clear">
                        <div class="left">
                            <p>平台5.0项目CDT评审会议</p>
                            <p>视讯4F-会议2</p>
                        </div>
                        <div class="right bottom_right_text">
                            <p><span class="bottom_right_txtstaticx">进行中</span><span class="bottom_right_txtstaticxxx">11:00~12:00</span></p>
                            <p>周浩(7979/1358431267)</p>
                        </div>
                    </li>
                </ul>
                <ul class="clearfix bottom_right_ul">
                    <li class="clear">
                        <div class="left">
                            <p>平台5.0项目CDT评审会议 <span class="bottom_right_txtstaticxxxx">会议冲突</span></p>
                            <p>视讯4F-会议2</p>
                        </div>
                        <div class="right bottom_right_text">
                            <p><span class="bottom_right_txtstatic5">11:00~12:00</span></p>
                            <p>周浩(7979/1358431267)</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
    @import '../../static/css/single_page/super_admin.css';
</style>
