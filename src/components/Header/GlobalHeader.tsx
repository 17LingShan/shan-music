import "./GlobalHeader.scss"
import HeaderMenu from "./HeaderMenu"
import HeaderLogo from "./HeaderLogo"
import HeaderInput from "./HeaderInput"
import { search } from "@/api/music"

function GlobalHeader() {
  search({ keywords: "海阔天空" }).then((res) => console.log(res))
  return (
    <>
      <div className='global-header'>
        <div className='header-content'>
          <HeaderLogo></HeaderLogo>
          <HeaderMenu></HeaderMenu>
          <HeaderInput></HeaderInput>
        </div>
      </div>
    </>
  )
}

export default GlobalHeader
