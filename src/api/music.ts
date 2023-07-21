import request from "@/utils/request"

export function commonSearch(params: commonSearch) {
  return request({
    url: "/search",
    method: "get",
    params: params
  })
}

export function getMusicUrlById(params: musicUrlParams) {
  return request({
    url: "/song/url/v1",
    method: "get",
    params: params
  })
}
