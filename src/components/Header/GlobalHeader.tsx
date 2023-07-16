import "./GlobalHeader.scss"
import HeaderMenu from "./Menu/HeaderMenu"
import HeaderLogo from "./Logo/HeaderLogo"
import HeaderInput from "./Input/HeaderInput"

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
