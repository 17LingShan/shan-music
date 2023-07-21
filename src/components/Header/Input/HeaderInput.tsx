import "./HeaderInput.scss"
import { useEffect, useState, KeyboardEvent } from "react"
import { useDispatch } from "react-redux"
import { Dispatch } from "@reduxjs/toolkit"
import { setSearchKeywords } from "@/store/searchSlice"
import { createSearchParams, useNavigate } from "react-router-dom"

function HeaderInput() {
  const navigate = useNavigate()
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
    if (keywords) {
      dispatch(setSearchKeywords(keywords))
      navigate({
        pathname: "/FindMusic",
        search: `${createSearchParams(
          new URLSearchParams([
            ["keywords", keywords || "海阔天空"],
            ["type", "1"]
          ])
        )}`
      })
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
