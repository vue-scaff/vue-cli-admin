<template>
  <div class="app-container documentation-container">
    <a
      class="document-btn"
      target="_blank"
      href="http://vue-scaff-admin.joenix.com/"
    >
      Demo
    </a>
    <a class="document-btn" target="_blank" href="http://vue-scaff.joenix.com/">
      Documentation
    </a>
    <a
      class="document-btn"
      target="_blank"
      href="https://github.com/vue-scaff/vue-scaff-admin"
    >
      Github Repository
    </a>
  </div>
</template>

<script>
export default {
  name: "Documentation",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.documentation-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 20%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  $color: #242424;

  .document-btn {
    flex-shrink: 0;
    display: block;
    cursor: pointer;
    background: $color;
    color: white;
    height: 60px;
    width: 200px;
    margin-bottom: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
    border-radius: 4px;
    border: 1px solid $color;
    transition: all 0.4s;
    &:hover {
      color: $color;
      background: transparent;
    }
  }
}
</style>
