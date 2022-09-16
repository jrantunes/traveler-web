<template>
  <header :class="{ 'white-background': !isHomePath }">
    <div>
      <RouterLink to="/">
        <img src="@/assets/logo.svg" alt="Traveler" />
      </RouterLink>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data() {
    return {
      isHomePath: true,
    };
  },
  mounted() {
    if (this.$router.currentRoute.value.name === "home") {
      this.isHomePath = true;
    } else {
      this.isHomePath = false;
    }
  },
});
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--background);
  height: 5.4375rem;

  &.white-background {
    background-color: var(--white);
    border-bottom: 1px solid var(--gray);
  }

  div {
    width: 1280px;
    display: flex;
    margin: 0 auto;
    padding: 1.5rem;

    img {
      width: 9.75rem;
      cursor: pointer;
    }
  }
}
</style>
