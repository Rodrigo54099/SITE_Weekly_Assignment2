import StoreActivity from "../StoreActivity/StoreActivity"
import "./Home.css"

export default function Home({ products = [], filterInput, isLoading} ) {
  const productsToShow = filterInput
    ? products?.filter((t) => t.description.toLowerCase().indexOf(filterInput.toLowerCase()) !== -1)
    : products

  return (
    <div className="Home">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <StoreActivity products={productsToShow} filterInput={filterInput} />
      )}
    </div>
  )
}
