import { Link } from "react-router-dom"
import { IoCart } from "react-icons/io5"

const Nav = () => {
  return (
    <>
    <header className="container">
        <nav className="navbar navbar-expand-lg  navbar-light relative">
                <Link to="/" className="text-center text-dark me-3 text-decoration-none">
                    <h4 className="m-0 text_green">Harmony</h4>
                    <h5>Organic</h5>
                </Link>
                {/* <!-- Hamburger menu --> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                {/* <!-- Nav menu --> */}
                <div className="nav_menu collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto gap-3">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text_green" id="active">Home</Link>
                        </li>
                        <li className="dropdown nav-item dropdown_custom">
                            <a className="dropdown-toggle text_green" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop
                            </a>

                            <ul className="dropdown-menu py-0" aria-labelledby="dropdownMenuLink">
                                <li className="nav-item">
                                    <Link to="/allproducts" className="nav-link text_green">All Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/groceries" className="nav-link text_green">Groceries</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/juice" className="nav-link text_green">Juice</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text_green" id="active">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link text_green">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link text_green">Login<i className="fa-solid fa-user ps-2 text_green"></i></Link>
                        </li>
                        <li className="d-none d-lg-flex align-items-center nav_cart">
                            <div className="nav_cart_container">
                                <span className="cart_AllPrice_container text_green">
                                &#8369;
                                    <span className="inCart_Allprice">
                                        00.00
                                    </span>
                                </span>
                                <button className="nav_cart_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="offcanvasRight">
                                    <IoCart className="text_green fs-5"/>
                                </button>
                                <span className="overlay_cart_counter">0</span>
                            </div>
                        </li>
                    </ul>
                </div>
        </nav>
    </header>

    {/* cart */}
    <div className="offcanvas offcanvas-end bg_lightGreen" tabIndex="-1" id="shoppingCart" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
            <h5 className="offcanvas-title fw-bold text_green" id="offcanvasRightLabel">Shopping Cart</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex align-items-center justify-content-center">
            <p className="fw-bold text_green">No products in the cart</p>
            </div>
        </div>
    </>
  )
}

export default Nav