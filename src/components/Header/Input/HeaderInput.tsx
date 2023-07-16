import "./HeaderInput.scss"
import { useEffect, useState, KeyboardEvent } from "react"
import { useDispatch } from "react-redux"
import { Dispatch } from "@reduxjs/toolkit"
import { setSearchWords } from "@/store/searchSlice"

function HeaderInput() {
  const [keywords, setKeyword] = useState<string | undefined>()
  const dispatch: Dispatch = useDispatch()
  const handleEnter = (event: KeyboardEvent): void => {
    if (event.key === "Enter") {
      const inputElement = event.target as HTMLInputElement
      setKeyword((preValue) => {
        return inputElement.value + (preValue === inputElement.value ? " " : "")
      })
    }
  }

  useEffect(() => {
    if (keywords !== "") {
      dispatch(setSearchWords(keywords))
    }
  }, [keywords])

  return (
    <>
      <div className='header-input'>
        <div className='input-bg'>
          <span className='input-icon'></span>
          <input type='text' placeholder='search' onKeyUp={handleEnter} />
        </div>
      </div>
    </>
  )
}

export default HeaderInput
