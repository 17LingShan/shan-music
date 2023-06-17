import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios"
import networkConfig from "@/config/network.config"

function request(config: AxiosRequestConfig): AxiosPromise {
  const instance: AxiosInstance = axios.create(networkConfig)
  // add req interceptors
  instance.interceptors.request.use(
    function (config: any) {
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  // add res interceptors
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      return response
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  return instance(config)
}

export default request
