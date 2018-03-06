<template>
    <div class="meetinglist_main">
        <meeting_manager_nav></meeting_manager_nav>
        <meetinglist_nav v-if="judeg"></meetinglist_nav>
        <router-view></router-view>
    </div>
</template>
<script>
    import meeting_manager_nav from './single_page/meeting_manager_nav.vue';
    import meetinglist_nav from './single_page/meetinglist_nav.vue';
    export default {
        components:{
            meeting_manager_nav,
            meetinglist_nav,
        },
        data () {
            return {
                judeg:true,
            }
        },
        methods:{
        },
        beforeRouteUpdate (to, from, next) {
            if (to.matched.some(record => record.meta.navshow)) {
                this.judeg=false;
                next();
            }else {
                next();
            }
        },
    }
</script>
<style>
    .meetinglist_main{
        width: 1024px;
        margin: 0 auto;
    }
</style>