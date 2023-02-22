<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="itemsPerPage"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api"
import { DataTableHeader } from "vuetify"

export default defineComponent({
  props: {
    headers: Array as PropType<Array<DataTableHeader>>,
    items: Array as PropType<Array<Record<string, unknown>>>,
    itemsPerPage: {
      type: Number,
      default: 10,
    },
  },
  setup() {
    return {}
  },
})
</script>
