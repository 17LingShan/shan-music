import BasicLayout from "@/layouts/BasicLayout"
import FindMusic from "@/pages/FindMusic/FindMusic"
import Mine from "@/pages/Mine/Mine"
import Follow from "@/pages/Follow/Follow"

const routerConfig = [
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        label: "findMusic",
        path: "/findMusic",
        element: <FindMusic />
      },
      {
        label: "mine",
        path: "/mine",
        element: <Mine />
      },
      {
        label: "follow",
        path: "/follow",
        element: <Follow />
      }
    ]
  }
]

export default routerConfig
