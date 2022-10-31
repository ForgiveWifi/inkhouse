import ProductCard from "./ProductCard";

function ProductList({products}) {
  if (!products) {
    return null
  }
  return (
    <>
      <div className="flexbox-row flex-wrap" style={{ gap: 20, marginTop: 15, justifyContent: "space-around" }}>
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