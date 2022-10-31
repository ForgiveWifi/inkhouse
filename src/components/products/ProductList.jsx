import ProductCard from "./ProductCard";

function ProductList({products}) {
  if (!products) {
    return null
  }
  return (
    <>
      <div className="product-grid" style={{}}>
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