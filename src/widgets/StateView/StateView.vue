<template>
  <template v-if="unDirty">
    <div class="loading">加载中...</div>
  </template>
  <template v-if="content">
    <slot></slot>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { States } from "./useViewState";

export default defineComponent({
  name: "StateView",
  props: {
    viewState: {
      type: String,
      default: States.unDirty,
    },
  },
  computed: {
    unDirty(): boolean {
      return [States.unDirty].includes(this.viewState);
    },
    content(): boolean {
      return [States.pending, States.content].includes(this.viewState);
    },
  },
});

</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
