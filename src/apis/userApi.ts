import { UserResult } from "@/models/user"
import { postAsync } from "./ApiClient"

export const requestUrl = {
  getList: "/users/list",
  getById: "/users/getById",
  create: "/users/create",
  update: "/users/update",
}

//リスト取得
const getListAsync = async () => {
  return await postAsync<Array<UserResult>>(requestUrl.getList, {})
}

//個別データ取得
const getItemByIdAsync = async () => {
  return await postAsync<UserResult>(requestUrl.getById, {})
}

//新規作成
const createAsync = async () => {
  return await postAsync<UserResult>(requestUrl.create, {})
}

//編集
const updateAsync = async () => {
  return await postAsync<UserResult>(requestUrl.update, {})
}

const userApi = {
  getListAsync,
  getItemByIdAsync,
  createAsync,
  updateAsync,
}

export { userApi }
