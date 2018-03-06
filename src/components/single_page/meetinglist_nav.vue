<template>
    <ul class="meeting_list clear">
        <li class="list_color1">
            <a href="">列表</a>
        </li>
        <li class="list_color2">
            <a href="">周</a>
        </li>
        <li class="list_color2">
            <a href="">日</a>
        </li>
        <li class="list_color2 list_last_child">
            <router-link to="/home/meetingList/createMeeting">
                <a>创建会议</a>
            </router-link>
        </li>
    </ul>
</template>
<style scoped>
    @import '../../static/css/single_page/meetinglist_nav.css';
</style>