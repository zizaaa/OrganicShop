
import { Link } from "react-router-dom"
import LeaftImg2 from "../assets/logo-leaf-new2.png"
import LeaftImg from "../assets/logo-leaf-new.png"
import HeroImg from "../assets/organic-products-hero.png"
import { IoCart } from "react-icons/io5"
import PropTypes from 'prop-types';

const Home = ({products,shopReviews}) => {
  return (
    <>
        <section>
          <div className="row mt-5 align-items-center">
            <div className="col-md">
              <img src={LeaftImg2}/>
              <h5 className="fw-bold text_green">Best Quality Products</h5>
              <h1 className="fw-bold darkGreen">Healthy living starts with organic eating</h1>
              <p className="mb-4 text_green">Welcome to our organic product store! We offer all-natural, locally sourced, organic food, supplements, and household items for a healthier, happier lifestyle.</p>
              <Link to="/allproducts" className="custom_btn">
              <IoCart className="btn_icon"/> Shop Now
              </Link>
            </div>
            <div className="col-md mt-5 mt-md-0">
              <img src={HeroImg} className="img-fluid"/>
            </div>
          </div>
        </section>
        
        <section className="text-center mt-5 mb-5">
          <div className="pt-5">
            <h1 className="darkGreen fw-bold">Best Selling Products</h1>
            <div className="leaf_container">
              <img src={LeaftImg}/>
              <img src={LeaftImg2}/>
            </div>
          </div>
            <div className="gap-3 mt-5 customcard_container">
              {products.map((product)=>(
                  (product).bestSell === true ? (
                    <div className="custom_cards" key={product.name}>
                    {product.sale === true ? (<div className="saleBanner" id="flag">Sale</div>) : null}
                      <div className="img-container">
                          <button className="addToWishList_Container">
                            <i className="fa-solid fa-heart"></i>
                          </button>
                          <img src={product.imgUrl} />
                          <button type="button" className="quickViewBtn">Quick View</button>
                      </div>
                      <div className="details-container">
                          <p className="category">{product.category}</p>
                          <p className="productName">{product.name}</p>
                          <span className="productPrice">
                              {product.sale ? (<span className="salePriceContainer">
                                <p className="oldProductPrice">&#8369; {product.price}</p>
                                <p className="divider mx-1">-</p>
                                <p className="salePrice">&#8369; {product.salePrice}</p>
                              </span>) : (<p className="origPrice">&#8369; {product.price}</p>)}

                              <span className="product_rating">
                                    <i className="fa-solid fa-star color_yellow"></i>
                                    <i className="fa-solid fa-star color_yellow"></i>
                                    <i className="fa-solid fa-star color_yellow"></i>
                                    <i className="fa-solid fa-star color_yellow"></i>
                                    <i className="fa-solid fa-star color_yellow"></i>
                                <span className="product_sold ms-1">{
                                  //format sold product count
                                (product).soldProducts >= 1000 ? `${(product.soldProducts / 1000)}k` : product.soldProducts
                                }</span>
                          </span>
                          </span>
                          <p className="location">{product.location}</p>
                          <button type="button" className="addToCartBtn">
                            Add to Cart
                          </button>
                      </div>
                    </div>
                  ) : null
              ))}
            </div>
        </section>
        <section className="my-3 promo-section">
            <div className="container promo-bg-container ">
                {/* <!-- dark bg effect --> */}
                <span className="dark-bg-effect"></span>

                <div className="container promo-container p-4">
                    <div className="row">
                        <div className="col-md">
                            <h1>Get 25% Off On Your First Purchase!</h1>
                        </div>
                        <div className="col-md d-flex align-items-center">
                            {/* <!-- button --> */}
                            <div className="btn_container">
                                <a href="./pages/allProducts.html" className="promo_custom_btn"><span><i className="fa-solid fa-cart-shopping ms-2"></i></span> Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="trendingProductsSection text-center mb-5">
            <div className="pt-5">
                <h1 className="darkGreen fw-bold">Trending Products</h1>
                <div className="leaf_container">
                  <img src={LeaftImg}/>
                  <img src={LeaftImg2}/>
                </div>
            </div>
            <div className="gap-3 mt-5 customcard_container">
              {products.map((product)=>(
                  (product).trending === true ? (
                    <div className="custom_cards" key={product.name}>
                    {product.sale === true ? (<div className="saleBanner" id="flag">Sale</div>) : null}
                      <div className="img-container">
                          <button className="addToWishList_Container">
                            <i className="fa-solid fa-heart"></i>
                          </button>
                          <img src={product.imgUrl} />
                          <button type="button" className="quickViewBtn">Quick View</button>
                      </div>
                      <div className="details-container">
                          <p className="category">{product.category}</p>
                          <p className="productName">{product.name}</p>
                          <span className="productPrice">
                              {product.sale ? (<span className="salePriceContainer">
                                <p className="oldProductPrice">&#8369; {product.price}</p>
                                <p className="divider mx-1">-</p>
                                <p className="salePrice">&#8369; {product.salePrice}</p>
                              </span>) : (<p className="origPrice">&#8369; {product.price}</p>)}

                              <span className="product_rating">
                                    <i className="fa-solid fa-star color_yellow"></i>
                                    <i className="fa-solid fa-star color_yellow"></i>
                                    <i className="fa-solid fa-star color_yellow"></i>
                                    <i className="fa-solid fa-star color_yellow"></i>
                                    <i className="fa-solid fa-star color_yellow"></i>
                                <span className="product_sold ms-1">{
                                  //format sold product count
                                (product).soldProducts >= 1000 ? `${(product.soldProducts / 1000)}k` : product.soldProducts
                                }</span>
                          </span>
                          </span>
                          <p className="location">{product.location}</p>
                          <button type="button" className="addToCartBtn">
                            Add to Cart
                          </button>
                      </div>
                    </div>
                  ) : null
              ))}
            </div>
        </section>
        <section className="text-center mb-5">
            <div className="pt-5">
                <h1 className="darkGreen fw-bold">Customers Reviews</h1>
                <div className="leaf_container">
                  <img src={LeaftImg}/>
                  <img src={LeaftImg2}/>
                </div>
            </div>
            <div className="row gap-3 reviewContainer mt-5">
              {shopReviews.map((reviews)=>(
                <div className="col-lg reviews" key={reviews.name}>
                  <span className="reviewRatings">
                    <i className="fa-solid fa-star color_yellow"></i>
                    <i className="fa-solid fa-star color_yellow"></i>
                    <i className="fa-solid fa-star color_yellow"></i>
                    <i className="fa-solid fa-star color_yellow"></i>
                    <i className="fa-solid fa-star color_yellow"></i>
                  </span>
                  <p className="userMessage">{reviews.message}</p>
                  <div className="profileContainer">
                    <img src={reviews.img} className="rounded-circle me-3" alt="" />
                    <h5 className="user-name">{reviews.name}</h5>
                  </div>
                </div>
              ))}
            </div>
        </section>
    </>
  )
}

Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  shopReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home