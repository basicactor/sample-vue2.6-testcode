<template>
  <v-btn :color="color" @click="$emit('click')"><slot /></v-btn>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    color: {
      type: String,
      default: "primary",
    },
  },
  setup() {
    return {}
  },
})
</script>
