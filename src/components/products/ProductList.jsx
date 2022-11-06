import NoBox from "../ui/NoBox";
import ProductCard from "./ProductCard";

function ProductList({products}) {
  if (!products) {
    return null
  }
  if (products.length === 0) {
    return <NoBox text="no products" />
  }
  if (products.length < 3) {
    return(
      <>
        <div className="product-grid">
          {
            products.map((product, i) => {
              return(
                <ProductCard key={i} product={product}/>
              )
            })
          }
          {
            Array(3 - products.length).fill(0).map((_, i) => {
            return(
              <div key={i}></div>
            )
          })}
        </div>
    </>
    )
  }
  return (
    <>
      <div className="product-grid">
        {
          products.map((product, i) => {
            return(
              <ProductCard key={i} product={product}/>
            )
          })
        }
      </div>
    </>
  );
}

export default ProductList;