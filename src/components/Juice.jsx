import PropTypes from 'prop-types';
import { useState} from 'react';

const Juice = (props) => {
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 12;
    // Logic to calculate the total number of pages
    const totalPages = Math.ceil(props.products.length / itemsPerPage);
    // Logic to slice the array based on the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = props.products.slice(startIndex, endIndex);

      // Logic to handle page navigation
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

    const getPageNumbers = () => {
      const pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    };
return (
  <section>
      <div className="right-container">
        <div className='sortingContainer'>
            <div className='sortDiv'>
              <p>Sort by</p>
              <button type='button' onClick={()=>{setSort('Trending')}}>Trending</button>
              <button type='button' onClick={()=>{setSort('Best Seller')}}>Best Seller</button>
              <button type='button' onClick={()=>{setSort('Top Sale')}}>Top Sales</button>
              <select onChange={(e)=>{setSort(e.target.value)}} placeholder='Price'>
                  <optgroup label='Price'>
                  <option value='Low'>Price: Low to High</option>
                  <option value='high'>Price: High to Low</option></optgroup>
              </select>
            </div>
            <div className='searchContainer'>
              <input type="search" placeholder="Search in All products..." onChange={(e)=>{setSort(e.target.value)}}/>
            </div>
        </div>
        <div className='sortedProductContainer'>
          {currentItems.filter((item,index,product)=>{
              if(sort === ''){
                  return item;
              }else if(item.name.toLowerCase().includes(sort.toLocaleLowerCase())){
                  return item;
              }else if(sort === 'Trending'){
                if(item.trending){
                  return item;
                }
              }else if(sort === 'Best Seller'){
                if(item.bestSell){
                  return item;
                }
              }else if(sort === 'Top Sale'){
                if(item.sale){
                  return item;
                }
              }else if(sort === 'Low'){
                  return product.sort((a,b)=> a.price - b.price)[index]
              }else if(sort === 'high'){
                return product.sort((a,b)=> b.price - a.price)[index]
              }
          }).map(product=> product.category === 'Juice' ? (
            <div className="custom_cards" key={product.name}>
                  {console.log(product === '')}
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
          ):null)
          }
        </div>
        <div className='buttonsContainer'>
                    <button className='prevBtn' onClick={goToPreviousPage} disabled={currentPage === 1}>
                    <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    {getPageNumbers().map((pageNumber) => (
                        <button
                          key={pageNumber}
                          onClick={() => goToPage(pageNumber)}
                          className={pageNumber === currentPage ? 'activePage' : ''}
                        >
                          {pageNumber}
                        </button>
                    ))}
                    <button className='nextBtn' onClick={goToNextPage} disabled={currentPage === totalPages}>
                      <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
              </div>
  </section>
  )
}
Juice.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Juice