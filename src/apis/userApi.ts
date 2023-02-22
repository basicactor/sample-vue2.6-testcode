import { UserCreateParam, UserEditParam, UserResult } from "@/models/user"
import { postAsync } from "./ApiClient"

export const requestUrl = {
  getList: "/users/list",
  getById: "/users/getById",
  create: "/users/create",
  edit: "/users/edit",
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
const createAsync = async (param: UserCreateParam) => {
  return await postAsync(requestUrl.create, param)
}

//編集
const editAsync = async (param: UserEditParam) => {
  return await postAsync(requestUrl.edit, param)
}

const userApi = {
  getListAsync,
  getItemByIdAsync,
  createAsync,
  editAsync,
}

export { userApi }
