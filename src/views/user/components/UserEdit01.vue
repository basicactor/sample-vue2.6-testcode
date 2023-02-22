<template>
  <div class="pa-16" style="width: 50%">
    <h2 class="py-4">UserEdit03: composableパターン</h2>
    <p>{{ color }}</p>

    <!-- vuetify使用なし -->
    <input v-model="name01" data-testid="name" />

    <button @click="$emit('onClick', name01)">create</button>

    <!-- vuetify使用あり -->
    <v-text-field v-model="name02" data-testid="v-name" />
    <v-btn @click="$emit('onClick', name02)">v-create</v-btn>

    <!-- vuetify使用あり + composable連携 -->
    <v-text-field v-model="state.name" data-testid="vc-name" />
    <button @click="$emit('onClick', state.name)">vc-create</button>

    <!-- 独自コンポーネント使用 -->
    <BaseTextField v-model="name03" data-testid="c-name" />
    <button @click="$emit('onClick', name03)">c-create</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "@vue/composition-api"
import BaseTextField from "@/components/textFields/BaseTextField.vue"
import BaseButton from "@/components/buttons/BaseButton.vue"
import { useUserComposable } from "../composables/userComposable"

export default defineComponent({
  components: {
    BaseTextField,
    // BaseButton,
  },
  setup() {
    const { state, sendRequestAsync } = useUserComposable()

    const color = ref("red")
    const name01 = ref("tom")
    const name02 = ref("tom")
    const name03 = ref("tom")

    // const increment = () => {
    //   count.value++
    // }

    return {
      state,
      color,
      name01,
      name02,
      name03,
      sendRequestAsync,
    }
  },
})
</script>
