import request from "@/utils/request"

export function search(keywords: any) {
  return request({
    url: "/search",
    method: "get",
    params: keywords
  })
}
