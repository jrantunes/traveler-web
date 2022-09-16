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

<style lang="scss">
.about-container {
  display: flex;
  .city-info {
    max-width: 500px;

    h1 {
      color: var(--blue-700);
      font: 600 clamp(40px, 4vw, 50px) Barlow, sans-serif;
    }

    p {
      margin-top: 40px;
      color: var(--blue-700);
      font-size: 1.25rem;
      line-height: 1.75rem;

      &:last-of-type {
        margin-top: 32px;
        color: var(--gray-200);
        font-size: 0.875rem;
        line-height: 1.5rem;
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

    @media only screen and (max-width: 460px) {
      flex-direction: column;
      align-items: center;
      width: 100%;

      .container {
        margin-left: 0;
        max-width: 100%;

        display: flex;
        align-items: center;

        div:nth-child(2) {
          flex: 1;
          border-top: none;
          border-left: 1px solid var(--gray);
        }

        p {
          margin-top: 4px;
        }

        & + div {
          margin-top: 20px;
        }
      }
    }
  }

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
    align-items: center;

    .city-info {
      text-align: center;
    }

    .city-cards {
      margin: 40px 0 0;
    }
  }
}
</style>
