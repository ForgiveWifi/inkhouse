
function ShippingBox({ ship_address }) {

  return (
    <div className="background1 radius15 shadow-2" style={{ width: "250px", margin: "5px 10px", padding: "8px 15px"}}>
      { ship_address?.first_name && <div>{`${ship_address?.first_name} ${ship_address?.last_name}`}</div> }
      { ship_address?.company_name && <div>{ship_address?.company_name}</div> }
      <div>{ship_address.address},</div> 
      <div>{`${ship_address.city}, ${ship_address.state}, ${ship_address.zip_code}`}</div> 
    </div>
  );
}

export default ShippingBox;