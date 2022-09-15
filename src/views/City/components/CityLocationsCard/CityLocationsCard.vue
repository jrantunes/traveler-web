<template>
  <div class="container">
    <div>
      <vue-feather
        :type="iconToRender"
        size="40px"
        stroke="var(--orange-100)"
      ></vue-feather>
    </div>

    <div>
      <h1>{{ amount }}</h1>
      <p>{{ textToRender }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { LocationType } from "@/interfaces/ILocation";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "CityLocationsCard",
  props: {
    cardType: {
      type: String as PropType<LocationType>,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  computed: {
    iconToRender() {
      return this.cardType === "TOURIST_SPOT"
        ? "camera"
        : this.cardType === "EVENT"
        ? "calendar"
        : "coffee";
    },

    textToRender() {
      return this.cardType === "TOURIST_SPOT"
        ? "Pontos Turísticos"
        : this.cardType === "EVENT"
        ? "Eventos Organizados"
        : "Comida e Bebida";
    },
  },
});
</script>

<style lang="scss" scoped>
.container {
  background-color: var(--white);
  border: 1px solid var(--gray);
  border-radius: 20px;
  width: 160px;

  > div {
    padding: 2rem;

    & + div {
      border-top: 1px solid var(--gray);

      h1 {
        color: var(--blue-700);
        font: 600 40px Barlow, sans-serif;
      }

      p {
        margin-top: 16px;
        color: var(--gray-200);
        font-size: 1rem;
        line-height: 22px;
      }
    }
  }
}
</style>
