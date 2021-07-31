<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  --content: 1200px;
  min-width: var(--content);
}
</style>
<script>
  export default {
    components: { },
    created() {
      document.title = '东四南街道';
    },
  };
</script>
<style scoped lang="scss">
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%
  }
</style>