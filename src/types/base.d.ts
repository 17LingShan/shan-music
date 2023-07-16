interface Artist {
  albumSize: number
  alias: string[]
  fansGroup: string | null
  id: number
  img1v1: number
  img1v1Url: string
  name: string
  picId: number
  picUrl: string | null
  trans: string | null
}

interface Album {
  artist: Artist
  copyrightId: number
  id: number
  mark: number
  name: string
  picId: number
  publishTime: number
  size: number
  status: number
}
interface Song {
  album: Album
  alias: string[]
  copyrightId: number
  duration: number
  fee: number
  ftype: number
  id: number
  mark: number
  mvid: number
  name: string
  rUrl: string | string
  rType: number
  status: number
}
interface Result {
  hasMore: boolean
  songCount: number
  songs: Song[]
}
