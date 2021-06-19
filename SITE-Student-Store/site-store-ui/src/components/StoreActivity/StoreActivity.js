import { Link } from "react-router-dom"
import { formatAmount } from "../../utils/format"
import "./StoreActivity.css"

export default function StoreActivity({ products = [] }) {
  return (
    <div className="StoreActivity">
      <img className="banner" src="https://ssha.ucmerced.edu/sites/ssha.ucmerced.edu/files/page/images/ucmerced2.jpg"></img>
      <h2>Products</h2>
      <div className="products">
        
        {products.map((product) => (

          <Link className="productList" key={product.id} to={`/products/${product.id}`}>
         
              <img className="product-image" src={product.image} alt={product.name}></img>
              <div className="info">
                {product.name}
                <span className="price">{formatAmount(product.price)}</span>
              </div> 
              <div className="rating">
                ⭐️⭐️⭐️⭐️⭐️
              </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
