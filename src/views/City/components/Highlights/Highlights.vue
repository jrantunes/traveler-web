<template>
  <div class="container">
    <h1>Top avaliados</h1>

    <div class="list">
      <Card
        v-for="location in locations"
        :key="location.id"
        :location="location"
        cardType="DETAILED"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import locationsList from "@/data/locationsList";
import { Card } from "@/components";
import ILocation from "@/interfaces/ILocation";

export default defineComponent({
  name: "Highlights",
  components: { Card },
  data() {
    return {
      locations: locationsList.slice(0, 4) as ILocation[],
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  margin-top: 120px;

  h1 {
    color: var(--blue-700);
    font: 600 32px Barlow, sans-serif;
  }

  .list {
    margin-top: 32px;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(236px, 1fr));

    article {
      justify-self: center;
    }
  }
}
</style>
