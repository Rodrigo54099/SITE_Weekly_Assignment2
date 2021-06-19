import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import "./App.css"

export default function App() {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [products, setTransactions] = useState([])
  const [filterInput, setFilterInput] = useState("")

  const onInputChange = (event) => {
    setFilterInput(event.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const productsRes = await axios.get("http://localhost:3001/store/products")
        if (productsRes?.data?.products) {
          setTransactions(productsRes.data.products)
        }
      } catch (err) {
        console.log({ err })
        setError(err)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar filterInput={filterInput} onInputChange={onInputChange} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  isLoading={isLoading}
                  error={error}
                  filterInput={filterInput}
                />
              }
            />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
