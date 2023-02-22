module.exports = {
  //vue&jestの基本テスト設定を読み込む
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",

  //axios読み込みエラーを解決するためMapperを使う。
  //メモ；jestはNode環境で動くため、commonJS(require仕様)形式に変換して呼ぶ必要がある
  //参考：https://github.com/axios/axios/issues/5101
  moduleNameMapper: {
    "^axios$": require.resolve("axios"),
  },

  //テスト実行対象
  testMatch: ["**/tests/unit/*.spec.ts"],

  //setupファイルでcomposition-apiとvuetifyを読み込ませる
  setupFiles: ["./tests/setup.ts"],
}
