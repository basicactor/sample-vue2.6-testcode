import { mockRecipeApi } from "./apis/mockUserApi"

export const handlers = [...Object.values(mockRecipeApi).map((i) => i())]
