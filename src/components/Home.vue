<template>
    <div>
        <headbar></headbar>
        <router-view></router-view>
    </div>
</template>
<script>
    import headbar from './common/Headbar.vue';
    export default {
        components:{
            "headbar":headbar,
        }
    }
</script>