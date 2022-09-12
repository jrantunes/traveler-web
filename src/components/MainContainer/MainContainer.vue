<template>
  <main>
    <Header />
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Header } from "@/components";

export default defineComponent({
  name: "MainContainer",
  components: {
    Header,
  },
});
</script>

<style lang="scss" scoped>
main {
  max-width: 1130px;
  width: 100%;
  margin: calc(5rem + 12px) auto 0;
}
</style>
