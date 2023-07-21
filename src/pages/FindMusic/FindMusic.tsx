import { Location, useLocation } from "react-router-dom"
import SearchView from "./SearchView"
import { parseSearchParams } from "@/utils/practice"

function FindMusic(): React.ReactElement {
  const location: Location = useLocation()
  const searchParams = parseSearchParams(location.search)
  console.log(searchParams)

  // const searchState: searchState = useSelector((state: RootState) => state.search)

  // let [searchResult, setResult] = useState<Result>()

  // const handleSearch = async (params: searchState) => {
  //   if (!params.keywords) return
  //   await commonSearch(params).then((res) => {
  //     console.log(res)
  //     setResult(JSON.parse(JSON.stringify(res.data.result)))
  //   })
  // }

  // useEffect(() => {
  //   handleSearch(searchState)
  // }, [searchState])

  return (
    <>
      {/* <h1>{searchState.keywords}</h1>
      <ul>
        {searchResult?.songs.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul> */}
      <SearchView keywords={searchParams.get("keywords")!} type={searchParams.get("type")!} />
    </>
  )
}

export default FindMusic
