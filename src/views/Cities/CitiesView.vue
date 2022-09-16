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

      <CardsList :cities="cities" :activeFilter="activeFilter" />
    </div>
  </MainContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MainContainer, CardsList } from "@/components";
import citiesList from "@/data/cityList";
import { FilterOptions } from "./components";

export default defineComponent({
  name: "CitiesView",
  components: {
    MainContainer,
    FilterOptions,
    CardsList,
  },
  data() {
    return {
      activeFilter: "ALL",
      cities: citiesList,
    };
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
}
</style>
