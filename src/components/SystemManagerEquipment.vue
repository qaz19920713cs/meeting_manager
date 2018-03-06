<template>
    <div class="systemManager">
        <system_manager_left_nav></system_manager_left_nav>
        <router-view></router-view>
    </div>
</template>
<script>
    import system_manager_left_nav from './single_page/system_manager_left_nav.vue';
    export default{
        components:{
            system_manager_left_nav,
        }
    }
</script>
<style>
    .systemManager{
        width: 1024px;
        margin: 0 auto;
    }
</style>