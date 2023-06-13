import BasicLayout from "@/layouts/BasicLayout"
import About from "@/pages/About"

const routerConfig = [
  {
    path: "/",
    element: <BasicLayout />
  },
  {
    path: "/about",
    element: <About />
  }
]

export default routerConfig
