import { rest } from "msw"
import { requestUrl } from "@/apis/userApi"
import { UserResult } from "@/models/user"

const list: Array<UserResult> = [
  {
    id: "1",
    name: "tom",
    email: "tom@ab.com",
  },
  {
    id: "2",
    name: "john",
    email: "john@ab.com",
  },
]

//リスト取得
const getListAsync = () =>
  rest.post(requestUrl.getList, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(list))
  })

//個別データ取得
const getItemByIdAsync = () =>
  rest.post(requestUrl.getById, async (req, res, ctx) => {
    const { id } = await req.json()
    const item = list.find((i) => i.id === id)
    return res(ctx.status(200), ctx.json(item))
  })

// 新規作成
const createAsync = () =>
  rest.post(requestUrl.create, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(list))
  })

// 編集
const updateAsync = () =>
  rest.post(requestUrl.update, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(list))
  })

const mockRecipeApi = {
  getListAsync,
  getItemByIdAsync,
  createAsync,
  updateAsync,
}

export { mockRecipeApi }
