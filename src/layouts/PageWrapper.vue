<template>
  <v-container class="pa-16">
    <div>
      <h1 class="text-xl font-bold text-center">
        <slot name="title" />
      </h1>
    </div>
    <hr class="my-2" />
    <div>
      <slot name="contents" />
    </div>
    <div>
      <slot name="actions" />
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  setup() {
    return {}
  },
})
</script>
