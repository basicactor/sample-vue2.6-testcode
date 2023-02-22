import { reactive, ref } from "@vue/composition-api"
import { userApi } from "@/apis/userApi"
import { UserCreateParam, UserEditParam, UserResult } from "@/models/user"

export const useUserComposable = () => {
  const list = ref<Array<UserResult>>([])

  const state = reactive<UserResult>({
    id: "",
    name: "",
    email: "",
  })

  const isLoading = ref(false)

  const getListAsync = async () => {
    isLoading.value = true
    try {
      const result = await userApi.getListAsync()
      list.value = result
      return result
    } catch (e) {
      throw new Error(`getListAsync failed: ${e}`)
    } finally {
      isLoading.value = false
    }
  }

  const createAsync = async (): Promise<void> => {
    const { id, ...rest } = state

    isLoading.value = true
    const param: UserCreateParam = rest

    try {
      await userApi.createAsync(param)
    } catch (e) {
      throw new Error(`createAsync error: ${e}`)
    } finally {
      isLoading.value = false
    }
  }

  const editAsync = async (): Promise<void> => {
    const param: UserEditParam = state
    isLoading.value = true

    try {
      await userApi.editAsync(param)
    } catch (e) {
      throw new Error(`editAsync error: ${e}`)
    } finally {
      isLoading.value = false
    }
  }

  const sendRequestAsync = async (
    pageType: "create" | "edit" = "create"
  ): Promise<void> => {
    isLoading.value = true
    try {
      if (pageType === "create") await createAsync()
      else await editAsync()
    } catch (e) {
      throw new Error(`editAsync error: ${e}`)
    } finally {
      isLoading.value = false
    }
  }

  return {
    state,
    list,
    isLoading,
    getListAsync,
    createAsync,
    editAsync,
    sendRequestAsync,
  }
}
