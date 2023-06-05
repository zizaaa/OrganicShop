import Nav from "./Nav"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
        <Nav/>
        <section>
            <Outlet />
        </section>
    </>
  )
}

export default Layout