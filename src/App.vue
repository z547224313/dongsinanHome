<template>
  <div id="app">
    <router-view />
    <bottom />
  </div>
</template>

<style lang="scss">
#app {
  min-width: 1200px;
}
</style>
<script>
import Bottom from "@/components/Bottom";
export default {
  components: { Bottom },
};
</script>
