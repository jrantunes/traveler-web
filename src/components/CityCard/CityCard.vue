<template>
  <article>
    <img :src="city.imageUrl" :alt="city.name" />
    <div>
      <h2>{{ city.name }}</h2>
      <span
        >{{ city.locationsCount }}
        {{ city.locationsCount > 1 ? "locais" : "local" }}</span
      >
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ICity from "@/interfaces/ICity";

export default defineComponent({
  name: "CityCard",
  props: {
    city: {
      type: Object as PropType<ICity>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
article {
  background-color: var(--white);
  border-radius: 20px;
  overflow: hidden;
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    height: 220px;
    width: 100%;

    object-fit: cover;
  }

  div {
    padding: 1.5rem;
    border: 1px solid var(--gray);
    border-radius: 0 0 20px 20px;

    h2 {
      color: var(--blue-700);
      font: 600 20px Barlow, sans-serif;
    }

    span {
      font: 400 12px Roboto, sans-serif;
      color: var(--gray-200);
    }
  }
}
</style>
