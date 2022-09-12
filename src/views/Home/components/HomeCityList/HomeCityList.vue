<template>
  <section>
    <div>
      <div>
        <CityCard
          v-for="city in cities.slice(0, 3)"
          :key="city.id"
          :city="city"
        />
      </div>
      <div>
        <CityCard
          v-for="city in cities.slice(3, 6)"
          :key="city.id"
          :city="city"
        />
      </div>
    </div>

    <strong>E muito mais...</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CityCard } from "@/components";
import citiesData from "@/data/cityList";

export default defineComponent({
  name: "HomeCityList",
  components: {
    CityCard,
  },
  data() {
    return {
      cities: citiesData,
    };
  },
});
</script>

<style lang="scss" scoped>
section {
  flex: 10;
  padding-right: 1.5rem;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 5.875rem);
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    border-radius: 5px;
    background-color: transparent;
  }

  > div {
    justify-content: flex-end;
    flex: 1;
    width: 100%;
    display: flex;

    div {
      &:last-of-type {
        margin-left: 32px;
        margin-top: 60px;
      }

      article + article {
        margin-top: 32px;
      }
    }
  }

  strong {
    margin: 20px auto;
    color: var(--orange-100);
    font: 700 18px Barlow, sans-serif;
  }

  @media only screen and (max-width: 870px) {
    flex: 5;

    > div {
      flex-direction: column;
      align-items: center;

      div:last-of-type {
        margin: 0;
        margin-top: 32px;
      }
    }
  }
}
</style>
