const { BadRequestError } = require("../utils/errors")
const { storage } = require("../data/storage")

class Store {
  static async listProducts() {
    // list all items in the products array
    const products = storage.get("products").value()
    return products
  }

  static async fetchProductById(productId) {
    // fetch a single product
    const product = storage
      .get("products")
      .find({ id: Number(productId) })
      .value()
    return product
  }

  static async recordProduct(product) {
    // create a new product

    if (!product) {
      throw new BadRequestError(`No product sent.`)
    }
    const requiredFields = ["description", "category", "price"]
    requiredFields.forEach((field) => {
      if (!product[field] && product[field] !== 0) {
        throw new BadRequestError(`Field: "${field}" is required in product`)
      }
    })

    const products = await Store.listProducts()
    const productId = products.length + 1
    const postedAt = new Date().toISOString()
    const newProduct = { id: productId, postedAt, ...product }

    storage.get("products").push(newProduct).write()

    return newProduct
  }
}

module.exports = Store
