<template>
  <div class="card-list" v-if="!!cities">
    <RouterLink
      v-for="city in cities"
      :key="city.id"
      :to="{ name: 'city', params: { id: city.id } }"
    >
      <Card :city="city" :cardType="cardType" />
    </RouterLink>
  </div>
  <div class="card-list" v-else>
    <RouterLink
      v-for="location in locations"
      :key="location.id"
      :to="{ name: 'location', params: { id: location.id } }"
    >
      <Card :location="location" :cardType="cardType" />
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Card } from "@/components";
import ICity from "@/interfaces/ICity";
import ILocation from "@/interfaces/ILocation";
import { CardTypes } from "../types";

export default defineComponent({
  name: "CardsList",
  components: {
    Card,
  },
  props: {
    activeFilter: {
      type: String,
      required: true,
    },
    cardType: {
      type: String as PropType<CardTypes>,
      default: "NORMAL",
    },
    cities: {
      type: Array as PropType<ICity[]>,
    },
    locations: {
      type: Array as PropType<ILocation[]>,
    },
  },
  // data() {
  //   return {
  //     cities: this.citiesList,
  //     locations: this.locationsList,
  //   };
  // },
  // watch: {
  //   activeFilter(state) {
  //     const updatedCities = citiesData.map((item) => item);

  //     if (state === "MOST_ACCESSED") {
  //       this.cities = updatedCities.sort(
  //         ({ entries: a }, { entries: b }) => b - a
  //       );
  //       return;
  //     }

  //     this.cities = updatedCities;
  //   },
  // },
});
</script>

<style lang="scss" scoped>
.card-list {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));
  margin-bottom: 30px;

  a {
    display: flex;
    justify-content: center;
  }
}
</style>
