import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { formatAmount} from "../../utils/format"
import axios from "axios"
import "./ProductDetail.css"

export default function ProductDetail() {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true)

      try {
        const res = await axios.get(`http://localhost:3001/store/products/${productId}`)
        if (res?.data?.product) {
          setProduct(res.data.product)
        }
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [productId])

  const renderProductContent = () => {
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <p className="description">No product found</p>
    return (
      <>
        <p className="name">{product?.name}</p>
        <img src={product?.image} alt = {product?.name}></img>
        <p className="description">{product?.description}</p>
        <div className="meta">
          <p className={`amount ${product?.price < 0 ? "minus" : ""}`}>{formatAmount(product?.price)}</p>
        </div>
      </>
    )
  }

  return (
    <div className="ProductDetail">
      <div className="card">
        <div className="title">
          <h3>Product #{productId}</h3>
          <p className="category">{product?.category}</p>
        </div>

        {renderProductContent()}
      </div>
    </div>
  )
}
