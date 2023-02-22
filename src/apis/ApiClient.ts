import axios, { AxiosInstance, AxiosRequestConfig, isAxiosError } from "axios"

const client: AxiosInstance = axios.create({
  baseURL: "/",
  headers: { "Content-Type": "application/json" },
  responseType: "json",
})

export const postAsync = async <T>(
  url: string,
  data: Record<string, unknown>,
  config?: AxiosRequestConfig
) => {
  try {
    const result = await client.post<T>(url, data, config)
    return result.data
  } catch (e) {
    if (isAxiosError(e)) {
      throw new Error("axiosError")
    } else {
      throw new Error("not axios Error")
    }
  }
}
