const express = require("express")
const Store = require("../models/store")
const { NotFoundError } = require("../utils/errors")
const router = express.Router()

// list all products
router.get("/products", async (req, res, next) => {
  try {
    const products = await Store.listProducts()
    res.status(200).json({ products })
  } catch (err) {
    next(err)
  }
})

// fetch single product
router.get("/products/:productId", async (req, res, next) => {
  const productId =  req.params.productId
  console.log(productId)
  try {
    const product = await Store.fetchProductById(productId)
    if (!product) {
      throw new NotFoundError("Product not found")
    }
    res.status(200).json({ product })
  } catch (err) {
    next(err)
  }
})
module.exports = router
