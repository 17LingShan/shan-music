import "./GlobalHeader.scss"
import HeaderMenu from "./HeaderMenu"
import HeaderLogo from "./HeaderLogo"
import HeaderInput from "./HeaderInput"

function GlobalHeader() {
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
