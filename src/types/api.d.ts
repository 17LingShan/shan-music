interface Params {
  keywords: string
  id: number
  type: number
  level: string
}

type commonSearch = Pick<Params, "keywords" | "type">
// interface commonSearch {
//   keywords: string
//   type: string
// }
type musicUrlParams = Pick<Params, "id" | "level">
