import OrderDisplay from "./OrderDisplay";

function InvoiceDisplay({loading, invoice}) {
  if (loading || !invoice) {
    return(
      null
    )
  } else
  console.log("invoice", invoice)
  return (
    <>
      <div style={{ marginTop: 80}}>
        <OrderDisplay loading={loading} order={invoice} />
      </div>
      
    </>
  );
}

export default InvoiceDisplay;