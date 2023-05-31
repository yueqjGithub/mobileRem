import axios, { AxiosRequestConfig } from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: 60000
})

const requestQueue: Record<string, boolean> = {}

request.interceptors.request.use(config => {
  const { url } = config
  if (requestQueue[url!]) {
    const cancel = axios.CancelToken.source()
    cancel.cancel()
    return Promise.reject(new Error('cancel_request'))
  } else {
    requestQueue[url!] = true
  }
  return config
})

request.interceptors.response.use(response => {
  return response
})

const httpApi = async (params: AxiosRequestConfig) => {
  try {
    const res = await request(params)
    return res
  } catch (e) {
    if ((e as unknown as Error).message === 'cancel_request') {
      console.log('cancel_request')
    } else {
      throw e
    }
  } finally {
    requestQueue[params.url!] = false
  }
}

export {
  httpApi
}