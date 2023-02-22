import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import vuetify from "./plugins/vuetify"
import CompositionApi from "@vue/composition-api"
import { worker } from "./mocks/browser"

Vue.config.productionTip = false
Vue.use(CompositionApi)

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")

// if (process.env.NODE_ENV === "development") {
// }
worker.start()
