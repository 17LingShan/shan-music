import { useNavigate, useLocation } from "react-router-dom"
import routerConfig from "@/config/router.config"

function MenuList() {
  const navigate = useNavigate()
  const location = useLocation()
  const lists = routerConfig.filter((item) => item.path === "/")[0].children

  return (
    <>
      {lists.map((item) => (
        <li
          className={location.pathname === item.path ? "menu-active" : undefined}
          key={item.path}
          onClick={() => {
            navigate(item.path)
          }}
        >
          <div>{item.label}</div>
        </li>
      ))}
    </>
  )
}

function HeaderMenu() {
  return (
    <>
      <div>
        <ul className='header-menu'>
          <MenuList />
        </ul>
      </div>
    </>
  )
}

export default HeaderMenu
