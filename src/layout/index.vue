<template>
    <div class="app-wrapper">
        <Sidebar class="sidebar-container"/>
    </div>
</template>

<script>
import {Sidebar} from './components'
export default {
    name: "Layout",
    methods: {
       
    },
    components:{
        Sidebar
    }
};
</script>

<style lang="scss" scoped>
    @import "~@/styles/variables.scss";
</style>