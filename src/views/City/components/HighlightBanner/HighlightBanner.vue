<template>
  <div class="container">
    <div class="info-container">
      <span
        ><vue-feather
          type="alert-circle"
          size="20px"
          stroke="var(--white)"
        ></vue-feather>
        Destaque
      </span>

      <h1>Praia dos Ingleses</h1>

      <p>
        Uma parte do paraíso na terra. Frequentemente com águas claras em tons
        verdes e azuis. Um dos locais mais preferidos por turistas e viajantes.
      </p>
    </div>
    <div class="image-container">
      <img
        src="https://img.freepik.com/fotos-premium/vista-aerea-da-praia-dos-ingleses-em-florianopolis-brasil_70216-9462.jpg?w=2000"
        alt="Praia dos Ingleses"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HighlightBanner",
});
</script>

<style lang="scss" scoped>
.container {
  margin-top: 80px;
  margin-bottom: 60px;

  height: 286px;
  background-color: var(--white);
  border-radius: 20px;
  overflow: hidden;
  display: flex;

  .info-container {
    padding: 46px 64px;
    border-radius: 20px 0 0 20px;
    border: 1px solid var(--gray);
    border-right: none;

    span {
      margin-bottom: 32px;
      background-color: var(--orange-100);
      color: var(--white);
      display: flex;
      align-items: center;
      width: fit-content;
      padding: 6px 16px;
      border-radius: 100px;

      font: 600 14px Barlow, sans-serif;

      i {
        margin-right: 8px;
      }
    }

    h1 {
      color: var(--blue-700);
      font: 600 32px Barlow, sans-serif;
      margin-bottom: 16px;
    }

    p {
      color: var(--gray-200);
      font-size: 16px;
    }
  }

  .image-container {
    width: 120%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
