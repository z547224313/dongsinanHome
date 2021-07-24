<template>
  <div id="app">
    <router-view />
    <Bottom />
  </div>
</template>

<style lang="scss">
#app {
  --content: 1200px;
  min-width: var(--content);
}
</style>
<script>
  import Bottom from "@/components/Bottom";
  export default {
    components: { Bottom },
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