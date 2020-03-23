<template>
    <div class="app-container">
        <el-button type="primary" @click="handleAddRole">New Role</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            rolesList: []
        }
    }
}
</script>

<style lang="sass" scoped>

</style>