import { render, fireEvent, screen } from "@testing-library/vue"

import { useUserComposable } from "@/views/user/composables/userComposable"
import UserEdit01 from "@/views/user/components/UserEdit01.vue"

describe("useUserComposable.ts", () => {
  const { state, createAsync } = useUserComposable()

  const { getByRole, getByText, getByTestId, emitted } = render(UserEdit01)

  // //以下スタブ作成(正常に動いているか微妙)
  // const { getByText, getByTestId, emitted } = render(UserEdit03TestingLibrary, {
  //   stubs: {
  //     // "Directive" is the stubbed out component
  //     Directive: "<BaseTextField>",
  //   },
  // })

  // /*
  // テンプレート固定値を取得出来るか検証
  // ⇒成功
  // */
  // it("テキスト入力反映テスト-固定値", async () => {
  //   //以下成功：固定値であれば取得可能
  //   const header = getByRole("heading", {
  //     name: "UserEdit03: composableパターン",
  //   })
  //   expect(header).toBeInTheDocument()

  //   //以下成功：{{}}内の値でれば取得可能
  //   const pColor = getByText("red")
  //   expect(pColor).toBeInTheDocument()
  //   screen.debug()
  // })

  // /*
  // コンポーネントの入力アクションによりrefが変更されるか検証
  // vuetify使用なし
  // ⇒成功
  // */
  // it("テキスト入力反映テスト-vuetify使用なし", async () => {
  //   // //以下失敗：v-modelの初期値は取得出来ない
  //   // const name = getByText("tom")
  //   // expect(name).toBeInTheDocument()

  //   //以下成功：getByTextでは取得出来ないが、fireEventで変更されていることを確認
  //   const nameInput = getByTestId("name")
  //   await fireEvent.update(nameInput, "john") //v-modelの値変更

  //   const createBtn = getByText("create")
  //   await fireEvent.click(createBtn) //clickイベント発火
  //   expect(emitted()).toHaveProperty("onClick") //省略してもいいかも。
  //   expect(emitted()["onClick"][0][0]).toBe("john")
  //   screen.debug()
  // })

  // /*
  // コンポーネントの入力アクションによりstateが変更されるか検証
  // // vuetify使用あり
  // ⇒成功
  // */
  // it("テキスト入力反映テスト-vuetify使用あり", async () => {
  //   //以下成功：getByTextでは取得出来ないが、fireEventで変更されていることを確認
  //   const nameInput = getByTestId("v-name")
  //   await fireEvent.update(nameInput, "v-john") //v-modelの値変更

  //   const createBtn = getByText("v-create")
  //   await fireEvent.click(createBtn) //clickイベント発火
  //   expect(emitted()).toHaveProperty("onClick") //省略してもいいかも。
  //   expect(emitted()["onClick"][0][0]).toBe("v-john")
  //   screen.debug()
  // })

  // /*
  // コンポーネントの入力アクションによりstateが変更されるか検証
  // // vuetify使用あり
  // ⇒失敗
  // */
  // it("テキスト入力反映テスト-独自コンポーネント使用", async () => {
  //   //以下v-modelの値が変更されない。。
  //   //子コンポーネントだからだめなのか？でもv-text-fieldも子コンポーネントなんだけどな。。
  //   const nameInput = getByTestId("c-name")
  //   await fireEvent.update(nameInput, "c-john")

  //   const createBtn = getByText("c-create")
  //   await fireEvent.click(createBtn) //clickイベント発火
  //   expect(emitted()).toHaveProperty("onClick") //省略してもいいかも。
  //   expect(emitted()["onClick"][0][0]).toBe("c-john")
  //   screen.debug()
  // })

  /*
  コンポーネントの入力アクションによりcomposableのstateが変更されるか検証
  ⇒やりたいことは出来てない..
  */
  it("テキスト入力反映テスト-vuetify使用+composable連携", async () => {
    //以下v-modelの値が変更されない。。
    //子コンポーネントだからだめなのか？でもv-text-fieldも子コンポーネントなんだけどな。。
    const nameInput = getByTestId("vc-name")
    await fireEvent.update(nameInput, "vc-john")

    // //TODO: 以下失敗
    // // composableには反映されないのか...
    // expect(state.name).toBe("vc-john")

    //以下成功
    const createBtn = getByText("vc-create")
    await fireEvent.click(createBtn) //clickイベント発火
    expect(emitted()).toHaveProperty("onClick") //省略してもいいかも。
    expect(emitted()["onClick"][0][0]).toBe("vc-john")
    screen.debug()
  })

  // /*
  // コンポーネントのクリックイベントでコンポーネント内で定義した関数が実行されるか検証
  // */
  // it("クリックイベント呼び出しテスト", async () => {
  //   // //関数呼び出し失敗パターン
  //   // await wrapper.find("#test-btn").trigger("click")

  //   //関数呼び出し成功パターン
  //   wrapper.find("#test-btn").vm.$emit("click")
  //   // wrapper.find("#create-btn").vm.$emit("click")

  //   // const fn = jest.fn(createAsync)
  //   // const fn = jest.spyOn(useUserComposable(), "createAsync")
  //   // const fn = jest.fn(wrapper.vm.sendRequestAsync)
  //   // const fn = jest.spyOn(wrapper.vm, "sendRequestAsync")

  //   const mockIncrement = jest.fn(wrapper.vm.increment)

  //   // expect(wrapper.vm.count).toBe(1) //これは成功する
  //   expect(mockIncrement).toBeCalledTimes(1) //これは失敗する（呼ばれてないことになってる）
  // })

  // /*
  // コンポーネントのクリックイベントでcomposableの関数が呼ばれるかを検証
  // */
  // it("クリックイベント-composable呼び出しテスト", async () => {
  //   // mockApiをインターセプト
  //   mockServer.use(mockUserApi.createAsync(mockFn, 200))

  //   const fn = jest.fn(createAsync)

  //   expect(fn).toBeCalledTimes(1)
  // })
})
