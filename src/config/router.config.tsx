import Home from "../page/home"
import About from "../page/About"

const routerConfig = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  }
]

export default routerConfig
