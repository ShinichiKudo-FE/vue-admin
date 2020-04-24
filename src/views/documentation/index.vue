<template>
  <div class="app-container documentation-container">
    <dropdown-menu :items="articleList" style="float:left;margin-left:50px;" title="下拉动画效果" />
  </div>
</template>

<script>
import DropdownMenu from '@/components/Share/DropdownMenu'

export default {
  name: 'Documentation',
  components: { DropdownMenu },
  data() {
    return {
      articleList: [
        { title: '例子1', href: '' },
        { title: '例子2', href: '' },
        { title: '例子3', href: '' },
        { title: '例子4', href: '' },
        { title: '例子5', href: '' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.documentation-container {
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .document-btn {
    margin-left: 50px;
    flex-shrink: 0;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    margin-bottom: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
