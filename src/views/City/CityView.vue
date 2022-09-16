<template>
  <div class="banner">
    <img
      src="https://images.unsplash.com/photo-1609374606321-9e1d29f2211b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1440&q=100"
      alt="Florianópolis"
    />
  </div>
  <MainContainer>
    <div class="content">
      <About />
      <Highlights />
      <HighlightBanner />
      <div class="filter-container">
        <h1>Conheça todos</h1>
        <FilterOptions
          @onChangeFilter="handleChangeFilter"
          :activeFilter="activeFilter"
        />
      </div>

      <CardsList
        :locations="locations"
        cardType="DETAILED"
        :activeFilter="activeFilter"
      />
    </div>
  </MainContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MainContainer, CardsList } from "@/components";
import locationsList from "@/data/locationsList";
import ILocation from "@/interfaces/ILocation";
import About from "./components/About/About.vue";
import Highlights from "./components/Highlights/Highlights.vue";
import HighlightBanner from "./components/HighlightBanner/HighlightBanner.vue";
import FilterOptions from "../Cities/components/FilterOptions/FilterOptions.vue";

export default defineComponent({
  name: "CityView",
  components: {
    MainContainer,
    About,
    Highlights,
    HighlightBanner,
    FilterOptions,
    CardsList,
  },
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      activeFilter: "ALL",
      locations: locationsList as ILocation[],
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
.banner {
  margin: 5rem auto 0;
  width: 100%;

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}

main {
  margin-top: 80px;
  .content {
    padding: 0 1.5rem;

    .filter-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 38px;

      h1 {
        color: var(--blue-700);
        font: 600 32px Barlow, sans-serif;
        margin-bottom: 16px;
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
}
</style>
