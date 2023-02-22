<template>
  <v-textarea
    v-model="inputedValue"
    :label="label"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    value: String,
    placeholder: String,
    disabled: Boolean,
    label: String,
  },
  setup(props, { emit }) {
    const inputedValue = computed({
      get: () => props.value,
      set: (newVal) => emit("input", newVal),
    })
    return { inputedValue }
  },
})
</script>
