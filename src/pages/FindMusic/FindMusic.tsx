import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
import { searchState } from "@/store/searchSlice"
import { search } from "@/api/music"

function FindMusic() {
  const searchState: searchState = useSelector((state: RootState) => state.search)

  let [searchResult, setResult] = useState<Result>()

  const handleSearch = async (params: searchState) => {
    if (!params.keywords) return
    await search(params).then((res) => {
      console.log(res)
      setResult(JSON.parse(JSON.stringify(res.data.result)))
    })
  }

  useEffect(() => {
    console.log("searchState", searchState)
    handleSearch(searchState)
    console.log(searchResult)
  }, [searchState])

  return (
    <>
      <h1>{searchState.keywords}</h1>
      <ul>
        {searchResult?.songs.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </>
  )
}

export default FindMusic
