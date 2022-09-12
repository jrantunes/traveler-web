<template>
  <div class="container">
    <h1>Top avaliados</h1>

    <div class="list">
      <CityCard v-for="city in cities" :key="city.id" :city="city" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CityCard from "@/components/CityCard/CityCard.vue";
import cityList from "@/data/cityList";

export default defineComponent({
  name: "Highlights",
  components: { CityCard },
  data() {
    return {
      cities: cityList.slice(0, 4),
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin-top: 120px;

  h1 {
    color: var(--blue-700);
    font: 600 32px Barlow, sans-serif;
  }

  .list {
    margin-top: 32px;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));

    article {
      justify-self: center;
    }
  }
}
</style>
