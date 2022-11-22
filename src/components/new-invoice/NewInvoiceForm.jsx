import { Button, NumberInput, SegmentedControl, Select } from "@mantine/core";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { showError } from "../../utils/alerts";
import ProductList from "../invoices/ProductList";
import NoBox from "../ui/NoBox";
import AddressForm from "../forms/AddressForm";
import { NumberSelect } from "./NumberSelect";

function NewInvoiceForm({loading, invoice, products, setInvoice, error}) {
  
  const [product, setProduct] = useState({ quantity: 0,})
  const [cartError, setCartError] = useState(false)
  
  function addToCart() {
    // setCartError(true)
    // if (!product || !product.quantity) {
    //   showError("item-error", "Select a product, size, and quantity!")
    // } else {
    //   setInvoice({
    //     ...invoice,
    //     cart: [...invoice.cart, product],
    //   })
    //   setCartError(false)
    // }
  }
  if (loading) {
    return null
  }
  return ( 
    <>
      <div className="flexbox-column" style={{ margin: "8px 0px"}}>
        {/* <div className="flexbox-column" style={{ marginRight: "10px"}}>
          <div>Product</div>
          {
            loading || !products ? 
            <Skeleton style={{ height: "36px", width: "200px" }} /> : 
            <Select 
              value={.design_id} 
              onChange={v => setItem({ ...product, design_id: v})} 
              data={products} 
              error={cartError && !product.design_id}
              nothingFound="No products"
              autoComplete="off"
              maxDropdownHeight={280}
              searchable
              limit={20}
            />
          }
        </div> */}
        
        <div className="flexbox-column" style={{ marginRight: "10px" }}>
          <div>quantity</div>
          <NumberSelect />
        </div>

        <Button 
          onClick={() => addToCart()} 
          style={{ marginTop: "27.5px" }}
        >
          Add to Order
        </Button>
      </div>
      {
        invoice.cart.length === 0 ?
          <div style={{ marginBottom: "25px"}}>
            <NoBox text="No Items" />
          </div> :
          <div className="full-width" style={{ maxWidth: "525px"}}>
            <ProductList items={invoice.cart} reverse={true} />
          </div>
            
      }
      <div className="flexbox-column full-width" style={{ marginTop: "5px", gap: 10}}>
        
      <div className="flexbox-column">
        <div>Shipping Provider</div>
        <Select 
          value={invoice.shipping_provider} 
          onChange={v => setInvoice({ ...invoice, shipping_provider: v})} 
          error={error && !invoice.shipping_provider}
          data={["UPS", "USPS", "FedEx", "OSM", "DHL"]} 
        />
      </div>
      
      {/* <div className="flexbox-column">
        <div>Production Priority </div>
        <SegmentedControl 
          value={invoice.priority} 
          onChange={v => setInvoice({ ...invoice, priority: v})} 
          data={["normal", "rush"]} 
        />    
      </div> */}
      
      </div>
    </>
  );
}

export default NewInvoiceForm
