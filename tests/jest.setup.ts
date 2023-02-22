import { mockServer } from "@/mocks/server"
import "@testing-library/jest-dom"

// // 型エラーが出た時に使えるかも
// //https://zenn.dev/convcha/articles/1148fd4aa662fd
// import "@testing-library/jest-dom/extend-expect";

export const mockFn = jest.fn()

beforeAll(() => mockServer.listen())
afterAll(() => mockServer.close())

afterEach(() => {
  mockServer.resetHandlers()
  mockFn.mockClear()
})
