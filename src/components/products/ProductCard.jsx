function ProductCard({product}) {
  console.log(product)
  return (
    <>
      <div className="flexbox-column" >
        <img className="radius5" src={product.images[0]} style={{ width: 250 }}/>
        <div>{product.name}</div>
      </div>
    </>
  );
}

export default ProductCard;