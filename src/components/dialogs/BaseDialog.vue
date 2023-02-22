<template>
  <v-dialog v-model="isOpenDialog">
    <slot />
  </v-dialog>
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    value: Boolean,
  },
  setup(props, { emit }) {
    const isOpenDialog = computed({
      get: () => props.value,
      set: (newVal) => emit("input", newVal),
    })
    return { isOpenDialog }
  },
})
</script>
