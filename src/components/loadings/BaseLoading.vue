<template>
  <v-progress-circular v-model="isLoading" />
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    value: Boolean,
  },
  setup(props, { emit }) {
    const isLoading = computed({
      get: () => props.value,
      set: (newVal) => emit("input", newVal),
    })
    return { isLoading }
  },
})
</script>
