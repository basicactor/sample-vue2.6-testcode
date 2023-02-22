<template>
  <v-container>
    <v-row>
      <slot name="label">{{ label }}</slot>
    </v-row>
    <v-row><slot name="field" /></v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  props: {
    label: String,
  },
  setup() {
    return {}
  },
})
</script>
