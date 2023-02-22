import { rest } from "msw"
import { requestUrl } from "@/apis/userApi"
import { apiEndpoint } from "@/apis/ApiClient"
import { UserResult, UserCreateParam, UserEditParam } from "@/models/user"
import { jest } from "@jest/globals"

export const list: Array<UserResult> = [
  {
    id: "1",
    email: "taro.com",
    name: "taro",
  },
  {
    id: "2",
    email: "hanako",
    name: "hanako",
  },
]

//#########################
// mock API
//#########################

//リクエスト待機時間
const delayTime = 1000

//ユーザーリスト取得
const getListAsync = (
  mockFn?: jest.Mock<any, any>, //jestテストに必要
  status = 200,
  customResponse: Array<Record<string, unknown>> = list
) =>
  rest.post(apiEndpoint + requestUrl.getList, (req, res, ctx) => {
    if (mockFn) mockFn()
    return res(
      ctx.delay(delayTime),
      ctx.status(status),
      ctx.json(customResponse)
    )
  })

//ユーザー作成
const createAsync = (
  mockFn?: jest.Mock<any, any>, //jestテストに必要
  status = 200,
  customResponse: Record<string, unknown> = {}
) =>
  rest.post(apiEndpoint + requestUrl.create, async (req, res, ctx) => {
    const param = await req.json()

    //jest.mockFn
    if (mockFn) mockFn(param)
    _createData(param)
    return res(
      ctx.delay(delayTime),
      ctx.status(status),
      ctx.json(customResponse)
    )
  })

//ユーザー編集
const editAsync = (
  mockFn?: jest.Mock<any, any>, //jestテストに必要
  status = 200,
  customResponse: Record<string, unknown> = {}
) =>
  rest.post(apiEndpoint + requestUrl.edit, async (req, res, ctx) => {
    const param = await req.json()

    if (mockFn) mockFn(param)
    _editData(param)

    return res(
      ctx.delay(delayTime),
      ctx.status(status),
      ctx.json(customResponse)
    )
  })

const mockUserApi = {
  getListAsync,
  createAsync,
  editAsync,
}

export { mockUserApi }

//#########################
// プライベート関数
//#########################

// //fakeデータ作成
// //n: データ数
// function _getFakeData(n = 20) {
//   return [...Array(n)].map((_, index) => {
//     const i = index + 3
//     return {
//       user_id: `${i}`,
//       company_name: "",
//       job_title: "",
//       name: "hanako", //名前
//       tel_no: "",
//     } as UserResult
//   })
// }

//新規作成
function _createData(param: UserCreateParam) {
  const id = list.slice(-1)[0]?.id + 10
  const newData: UserResult = {
    ...param,
    id,
  }

  list.push(newData)
}

//編集
function _editData(param: UserEditParam) {
  const index = list.findIndex((i) => i.id === param.id)

  const newData: UserResult = {
    ...param,
  }

  list[index] = newData
}
