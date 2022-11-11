
function ShippingBox({ ship_address }) {
  const {name,address} = ship_address
  return (
    <div className="background1 radius15 shadow2" style={{ width: "250px", margin: "5px 10px", padding: "8px 15px"}}>
      <div>{name}</div>
      <div>{address.line1}</div> 
      <div>{address.line2}</div> 
      <div>{`${address.city}, ${address.state}, ${address.postal_code}`}</div> 
    </div>
  );
}

export default ShippingBox;