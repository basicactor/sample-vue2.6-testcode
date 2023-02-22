import { mockUserApi } from "./apis/mockUserApi"

export const handlers = [...Object.values(mockUserApi).map((i) => i())]
