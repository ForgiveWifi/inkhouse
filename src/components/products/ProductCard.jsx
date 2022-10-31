function ProductCard({product}) {
  console.log(product)
  return (
    <>
      <div className="flexbox-column" style={{ width: 250 }}>
        <img className="radius10" src={product.images[0]} style={{ width: 250 }}/>
        <div className="full-width">{product.name}</div>
      </div>
    </>
  );
}

export default ProductCard;