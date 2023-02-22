import Vue from "vue"
import BaseBtn from "@/components/buttons/BaseBtn.vue"
import BaseTextField from "@/components/textFields/BaseTextField.vue"
import BaseTextarea from "@/components/textareas/BaseTextarea.vue"
import BaseCard from "@/components/cards/BaseCard.vue"
import BaseDialog from "@/components/dialogs/BaseDialog.vue"
import FormFieldInput from "@/layouts/FormFieldInput.vue"

import PageWrapper from "@/layouts/PageWrapper.vue"

Vue.component("BaseBtn", BaseBtn)
Vue.component("BaseTextField", BaseTextField)
Vue.component("BaseTextarea", BaseTextarea)
Vue.component("BaseCard", BaseCard)
Vue.component("BaseDialog", BaseDialog)
Vue.component("FormFieldInput", FormFieldInput)

Vue.component("PageWrapper", PageWrapper)
