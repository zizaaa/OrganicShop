import { Link } from "react-router-dom"

const Footer = () => {
return (
    <footer className="pt-5 mt-3 text-center">
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <h5 className="title">
                        <span className="harmony">Harmony </span>
                        Organic
                    </h5>
                    <p>
                    We are dedicated to providing our customers with the highest quality, locally sourced, organic food, supplements, and household items. Our products are carefully selected and meticulously vetted to ensure that they meet our strict standards for quality, freshness, and sustainability. We believe that organic living is not just a trend but a way of life, and we are committed to making it accessible to everyone. Come and explore our wide selection of organic products, and discover the many benefits of living a healthier, more sustainable lifestyle.
                    </p>
                </div>
                <div className="col-md">
                    <div className="quickLinksContainer">
                        <h5 className="title">Quick Links</h5>
                            <Link to='/about' className="Link">About</Link>
                            <Link to='/contact' className="Link">Contact</Link>
                            <Link to='/' className="Link">Home</Link>
                            <Link to='#' className="Link">My account</Link>
                            <Link to='/allproducts' className="Link">Shop</Link>
                    </div>
                </div>
                <div className="col-md">
                    <div className="quickLinksContainer">
                        <h5 className="title">Site Links</h5>
                            <Link to='#' className="Link">Privacy Policy</Link>
                            <Link to='#' className="Link">Offers Coupons</Link>
                            <Link to='#' className="Link">Terms & Conditions</Link>
                    </div>
                    <div className="quickLinksContainer mt-3"> 
                    <h5 className="title">Quick Links</h5>
                            <Link to='#' className="Link">Know More About Us</Link>
                            <Link to='#' className="Link">Visit Store</Link>
                            <Link to='#' className="Link">Let's Connect</Link>
                            <Link to='#' className="Link">Locate Stores</Link>
                    </div>
                </div>
            </div>
            <div className="copyRightContainer">
                <p>Copyright &copy; 2023 | <span className="harmony">Harmony</span> Organic</p>
                <div className="soc-Container">
                <a href="#" className="fa-brands fa-facebook"></a>
                <a href="#" className="fa-brands fa-twitter"></a>
                <a href="#" className="fa-brands fa-instagram"></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer