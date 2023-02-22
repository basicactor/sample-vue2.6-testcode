export type UserResult = {
  id: string
  name: string
  email: string
}

export type UserCreateParam = Omit<UserResult, "id">

export type UserEditParam = UserResult
