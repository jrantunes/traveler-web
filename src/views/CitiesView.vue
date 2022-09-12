<template>
  <MainContainer>
    <div class="content">
      <div class="filter-container">
        <h2>Selecione uma cidade</h2>
        <FilterOptions
          @onChangeFilter="handleChangeFilter"
          :activeFilter="activeFilter"
        />
      </div>

      <div class="city-list">
        <CityCard v-for="city in cities" :key="city.id" :city="city" />
      </div>
    </div>
  </MainContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MainContainer, FilterOptions, CityCard } from "@/components";
import citiesData from "@/data/cityList";

export default defineComponent({
  name: "CitiesView",
  components: {
    MainContainer,
    FilterOptions,
    CityCard,
  },
  data() {
    return {
      activeFilter: "ALL",
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
  methods: {
    handleChangeFilter(filter: string) {
      this.activeFilter = filter;
    },
  },
});
</script>

<style lang="scss" scoped>
.content {
  margin: calc(5rem + 40px) auto 0;
  padding: 0 1.5rem;

  .filter-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 38px;

    h2 {
      color: var(--blue-700);
      font: 600 34px Barlow, sans-serif;
    }

    @media only screen and (max-width: 630px) {
      flex-direction: column;
      align-items: flex-start;

      h2 {
        margin-bottom: 20px;
      }
    }
  }

  .city-list {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    margin-bottom: 30px;

    article {
      justify-self: center;
    }
  }
}
</style>
