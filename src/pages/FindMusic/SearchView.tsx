import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Dispatch } from "@reduxjs/toolkit"
import { commonSearch } from "@/api/music"
import { setMusicId } from "@/store/searchSlice"

function SearchView(props: { keywords: string; type: number }): React.ReactElement {
  const { keywords, type } = props

  const [searchResult, setResult] = useState<Result | null>()

  const handleSearch = async (params: commonSearch) => {
    await commonSearch(params).then((res) => {
      setResult(JSON.parse(JSON.stringify(res.data.result)))
    })
  }

  useEffect(() => {
    if (keywords) {
      handleSearch({ keywords: keywords, type: type })
    }
  }, [keywords])

  return (
    <>
      <ul>
        {searchResult?.songs.map((item) => (
          <SearchItem key={item.id} name={item.name} id={item.id} />
        ))}
      </ul>
    </>
  )
}

function SearchItem(props: { name: string; id: number }): React.ReactElement {
  const { name, id } = props
  const dispatch: Dispatch = useDispatch()

  const handleSetMusicId = (id: number) => {
    console.log(id)
    dispatch(setMusicId(id))
  }

  return (
    <>
      <li key={id} onClick={() => handleSetMusicId(id)}>
        {name}
      </li>
    </>
  )
}

export default SearchView
