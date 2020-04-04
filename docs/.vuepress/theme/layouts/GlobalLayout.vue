<!-- themePath/layouts/GlobalLayout.vue -->
<template>
  <div id="global-layout">
    <ParentLayout/>
    <footer> <a href="http://beian.miit.gov.cn">粤ICP备19157939号</a></footer>
  </div>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
export default {
  components: {
    ParentLayout
  }
};
</script>

<style lang="stylus" scoped>
    footer
      text-align:center
</style>
