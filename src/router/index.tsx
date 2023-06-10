import { Router } from "@remix-run/router"
import { createBrowserRouter } from "react-router-dom"
import routerConfig from "../config/router.config"

const router: Router = createBrowserRouter(routerConfig)

export default router
