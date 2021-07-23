<template>
  <div id="app">
    <router-view />
    <bottom />
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
