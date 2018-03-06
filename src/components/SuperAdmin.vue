<template>
    <div>
        <superadmin></superadmin>
        <footbar></footbar>
    </div>
</template>
<script>
    import superadmin from './single_page/super_admin.vue';
    import footbar from './common/Footbar.vue';
    export default {
        components:{
            superadmin,
            footbar,
        }
    }
</script>