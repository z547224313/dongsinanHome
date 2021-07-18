<template>
  <div id="app">
    <router-view />
    <bottom />
  </div>
</template>

<style lang="scss"></style>
<script>
import Bottom from "@/components/Bottom";
export default {
  components: { Bottom },
};
</script>
