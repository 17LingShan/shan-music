import request from "@/utils/request"

export function search(params: keywords) {
  return request({
    url: "/search",
    method: "get",
    params: params
  })
}
