<template>
  <div>
    <span
      :class="activeFilter === 'ALL' ? 'active' : ''"
      @click="handleChangeFilter('ALL')"
      >Todas</span
    >
    <span
      :class="activeFilter === 'MOST_ACCESSED' ? 'active' : ''"
      @click="handleChangeFilter('MOST_ACCESSED')"
      >Mais acessadas</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterOptions",
  emits: ["onChangeFilter"],
  props: {
    activeFilter: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleChangeFilter(filter: string) {
      this.$emit("onChangeFilter", filter);
    },
  },
});
</script>

<style lang="scss" scoped>
div {
  padding-bottom: 10px;
  border-bottom: 1px solid var(--gray);

  span {
    position: relative;
    cursor: pointer;
    font-family: Roboto, sans-serif;
    color: var(--gray-100);

    &:nth-child(2) {
      margin-left: 32px;
    }

    &.active {
      color: var(--blue-700);
      font-weight: 700;

      &::after {
        position: absolute;
        content: "";

        bottom: -15px;
        left: 0;

        height: 2px;
        width: 100%;
        background-color: var(--orange-100);
      }
    }
  }
}
</style>
