<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    console.log("ALL ROUTES : ", this.$router.options.routes);
  }
};
</script>
