<template>
  <div class="row">
    <HomeCom />
    <div class="rightcolumn">
      <Sidebar />
    </div>
  </div>
</template>

<script>
import HomeCom from "../components/HomeCom";
import Sidebar from "../components/Sidebar";
export default {
  components: {
    HomeCom,
    Sidebar,
  },
};
</script>

<style scoped>
</style>