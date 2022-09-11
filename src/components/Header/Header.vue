<template>
  <header>
    <img src="@/assets/logo.svg" alt="Traveler" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 1130px;
  background-color: var(--background);
  display: flex;
  margin: 0 auto;
  padding: 1.5rem;

  img {
    width: 156px;
    cursor: pointer;
  }
}
</style>
