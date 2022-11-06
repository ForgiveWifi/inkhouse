import SizeList from "./SizeList";

function ProductCard({product}) {
  console.log(product)
  return (
    <>
      <div className="flexbox-column margin-auto" style={{ width: 250 }}>
        <img className="radius10" src={product.images[0]} style={{ width: 250 }}/>
        <h3 className="full-width" style={{ margin: "4px 0px"}}>{product.name}</h3>
        <SizeList sizes={product.sizes} />
      </div>
    </>
  );
}

export default ProductCard;