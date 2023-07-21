import { getMusicUrlById } from "@/api/music"
import { RootState } from "@/store"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function PlayBar() {
  const { id, level }: searchState = useSelector((state: RootState) => state.search)

  const [musicUrl, setMusicUrl] = useState<string>()

  const handleSetId = async () => {
    await getMusicUrlById({ id: id, level: level || "standard" }).then((res) => {
      console.log(res)
      setMusicUrl(res.data.data[0].url)
    })
  }

  useEffect(() => {
    if (id) {
      handleSetId()
    }
  }, [id])
  return (
    <>
      <audio src={musicUrl} autoPlay controls></audio>
    </>
  )
}

export default PlayBar
