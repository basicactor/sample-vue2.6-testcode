<template>
  <v-layout>
    <v-app-bar>
      <v-btn value="home">
        <v-icon>mdi-home</v-icon>
        ホーム
      </v-btn>

      <v-btn value="shopList">
        <v-icon>mdi-heart</v-icon>
        買い物リスト
      </v-btn>

      <v-btn value="nearby">
        <v-icon>mdi-map-marker</v-icon>
        献立表
      </v-btn>

      <router-link to="/recipe">
        <v-btn value="recipe">
          <v-icon>mdi-map-marker</v-icon>
          レシピ
        </v-btn>
      </router-link>

      <v-btn value="myPage">
        <v-icon>mdi-account</v-icon>
        マイページ
      </v-btn>
    </v-app-bar>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"

export default defineComponent({
  setup() {
    return {}
  },
})
</script>
