<template>
  <div class="about-container">
    <section class="city-info">
      <h1>Florianópolis</h1>
      <p>
        Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente
        constituída pela Ilha de Santa Catarina, com 54 km de comprimento.
      </p>
      <p>
        É famosa pelas suas praias, incluindo estâncias turísticas populares
        como a Praia dos Ingleses na extremidade norte da ilha.
      </p>
    </section>
    <section class="city-cards">
      <CityLocationsCard cardType="TOURIST_SPOT" :amount="60" />
      <CityLocationsCard cardType="DRINK_AND_FOOD" :amount="45" />
      <CityLocationsCard cardType="EVENT" :amount="36" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CityLocationsCard from "../CityLocationsCard/CityLocationsCard.vue";

export default defineComponent({
  name: "About",
  components: { CityLocationsCard },
});
</script>

<style lang="scss" scoped>
.about-container {
  display: flex;

  .city-info {
    max-width: 500px;

    h1 {
      color: var(--blue-700);
      font: 600 50px Barlow, sans-serif;
    }

    p {
      margin-top: 40px;
      color: var(--blue-700);
      font-size: 18px;
      line-height: 28px;

      &:last-of-type {
        margin-top: 32px;
        color: var(--gray-200);
        font-size: 14px;
        line-height: 24px;
      }
    }
  }

  .city-cards {
    flex: 1;
    margin-left: 22px;
    display: flex;
    justify-content: flex-end;

    div + div {
      margin-left: 16px;
    }
  }
}
</style>
