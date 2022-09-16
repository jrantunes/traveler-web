<template>
  <article>
    <img :src="itemToShow.imageUrl" :alt="itemToShow.name" />
    <div
      class="city-info"
      :class="{ 'no-bottom-radius': cardType === 'DETAILED' }"
    >
      <h2>{{ itemToShow.name }}</h2>
      <span v-if="cardType === 'NORMAL'">
        {{ itemToShow.locationsCount }}
        {{ itemToShow.locationsCount! > 1 ? "locais" : "local" }}</span
      >
    </div>
    <div class="location-info" v-if="cardType === 'DETAILED'">
      <p>{{ itemToShow.locationTypeLabel }}</p>
      <vue-feather
        :type="itemToShow.locationTypeIcon"
        size="24px"
        stroke="var(--orange-100)"
      ></vue-feather>
    </div>
    <span v-if="cardType === 'DETAILED'" class="city-rating">
      <vue-feather
        type="star"
        size="20px"
        stroke="var(--white)"
        fill="var(--white)"
      ></vue-feather>
      {{ itemToShow.rating }}
    </span>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ICity from "@/interfaces/ICity";
import ILocation from "@/interfaces/ILocation";
import { CardTypes } from "../types";

export default defineComponent({
  name: "Card",
  props: {
    city: {
      type: Object as PropType<ICity>,
    },
    location: {
      type: Object as PropType<ILocation>,
    },
    cardType: {
      type: String as PropType<CardTypes>,
      default: "NORMAL",
    },
  },
  computed: {
    itemToShow() {
      return {
        id: this.city ? this.city.id : this.location?.id ?? "",
        name: this.city ? this.city.name : this.location?.name ?? "",
        imageUrl: this.city
          ? this.city.imageUrl
          : this.location?.imageUrl ?? "",
        locationsCount: this.city ? this.city.locationsCount : undefined,
        rating: this.location
          ? this.location.rating.toFixed(1).replace(".", ",")
          : undefined,
        locationTypeLabel: this.location
          ? this.location.type === "TOURIST_SPOT"
            ? "Pontos Turísticos"
            : this.location.type === "EVENT"
            ? "Eventos Organizados"
            : "Comida e Bebida"
          : undefined,
        locationTypeIcon: this.location
          ? this.location.type === "DRINK_AND_FOOD"
            ? "coffee"
            : this.location.type === "EVENT"
            ? "calendar"
            : "camera"
          : undefined,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
article {
  position: relative;
  background-color: var(--white);
  border-radius: 20px;
  /* overflow: hidden; */
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    height: 200px;
    width: 100%;
    border-radius: 20px 20px 0 0;

    object-fit: cover;
  }

  .city-info {
    padding: 1.5rem;
    border: 1px solid var(--gray);
    border-radius: 0 0 20px 20px;

    &.no-bottom-radius {
      border-radius: 0;
    }

    h2 {
      color: var(--blue-700);
      font: 600 20px Barlow, sans-serif;
    }

    span {
      font: 400 12px Roboto, sans-serif;
      color: var(--gray-200);
    }
  }

  .location-info {
    border: 1px solid var(--gray);
    border-top: none;
    border-radius: 0 0 20px 20px;
    padding: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font: 500 16px Barlow, sans-serif;
      color: var(--gray-200);
    }
  }

  .city-rating {
    position: absolute;
    left: 24px;
    top: -14px;
    background-color: var(--orange-100);
    font: 600 18px Barlow, sans-serif;
    color: var(--white);

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 18px 14px;
    border-radius: 10px;
  }
}
</style>
