import Nav from "./Nav"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
        <Nav/>
        <section className="container">
            <Outlet />
        </section>
        <Footer/>
    </>
  )
}

export default Layout