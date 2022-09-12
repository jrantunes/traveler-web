<template>
  <div class="city-list">
    <CityCard v-for="city in cities" :key="city.id" :city="city" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CityCard } from "@/components";
import citiesData from "@/data/cityList";

export default defineComponent({
  name: "CitiesList",
  components: {
    CityCard,
  },
  props: {
    activeFilter: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      cities: citiesData,
    };
  },
  watch: {
    activeFilter(state) {
      const updatedCities = citiesData.map((item) => item);

      if (state === "MOST_ACCESSED") {
        this.cities = updatedCities.sort(
          ({ entries: a }, { entries: b }) => b - a
        );
        return;
      }

      this.cities = updatedCities;
    },
  },
});
</script>

<style lang="scss" scoped>
.city-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  margin-bottom: 30px;

  article {
    justify-self: center;
  }
}
</style>
