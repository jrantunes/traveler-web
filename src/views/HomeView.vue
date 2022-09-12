<template>
  <MainContainer>
    <div class="content">
      <section>
        <div>
          <h1>Viva uma grande aventura</h1>

          <p>
            Descubra locais incríveis para se visitar em cidades maravilhosas de
            Santa Catarina.
          </p>

          <RouterLink to="/cities">
            <button>Descobrir todos os lugares</button>
          </RouterLink>
        </div>
      </section>
      <HomeCityList />
    </div>
  </MainContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HomeCityList, MainContainer } from "@/components";

export default defineComponent({
  name: "HomeView",
  components: {
    HomeCityList,
    MainContainer,
  },
});
</script>

<style lang="scss" scoped>
.content {
  display: flex;

  section:first-of-type {
    flex: 7;
    padding-left: 1.5rem;
    margin-top: 28px;

    div {
      max-width: 317px;

      h1 {
        font: 600 max(55px, 5.75vw) Barlow, sans-serif;
        line-height: 64px;
        color: var(--blue-700);
      }

      p {
        color: var(--gray-200);
        font-size: 1.125rem;
        line-height: 1.75rem;
        margin-top: 40px;
      }

      button {
        background: var(--orange-100);
        width: 100%;
        padding: 1.5rem 0;
        margin-top: 48px;
        border-radius: 10px;
        color: var(--white);
        font: 500 16px Heebo, sans-serif;
        transition: background-color 0.2s;

        &:hover {
          background-color: #ee490e;
        }
      }
    }
  }

  @media only screen and (max-width: 636px) {
    flex-direction: column;

    section:first-of-type {
      margin-top: 0;
      margin-bottom: 32px;
      padding-right: 1.5rem;

      div {
        max-width: 100%;
        text-align: center;

        button {
          max-width: 317px;
          width: 100%;
        }
      }
    }

    section:last-of-type {
      padding-left: 1.5rem;
      max-height: 100%;
    }
  }
}
</style>
