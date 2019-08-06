<template>
    <div v-if="!item.hidden" class="menu-wrapper">
        <template>
            <app-link>
                <el-menu-item>
                    <item/>
                </el-menu-item>
            </app-link>
        </template>
    </div>
</template>

<script>
    import Item from './Item'
    import AppLink from './Link'
    export default {
        name: 'SidebarItem',
        components:{Item,AppLink},
        data(){
            this.onlyOneChild = null;
            return{}
        }
    }
</script>

<style lang="scss" scoped>

</style>