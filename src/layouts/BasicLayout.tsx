import "./styles/BasicLayout.scss"
import { Outlet } from "react-router-dom"
import GlobalHeader from "@/components/Header/GlobalHeader"
import PlayBar from "@/components/play/PlayBar"

function BasicLayout() {
  return (
    <>
      <div className='basic-layout'>
        <div className='global-header-wrap'>
          <GlobalHeader />
        </div>
        <div className='content-wrap'>
          <div className='content-inner'>
            <Outlet />
          </div>
        </div>
        <div className='footer-wrap'>
          <PlayBar />
        </div>
      </div>
    </>
  )
}

export default BasicLayout
