import OrderDisplay from "./OrderDisplay";

function InvoiceDisplay({loading, invoice}) {
  if (loading || !invoice) {
    return(
      null
    )
  } else
  return (
    <>
      <div style={{ margin: 40, marginTop: 90}}>
        <OrderDisplay loading={loading} order={invoice} />
      </div>
    </>
  );
}

export default InvoiceDisplay;