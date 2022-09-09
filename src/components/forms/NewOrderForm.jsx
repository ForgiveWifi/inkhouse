import { Button, NumberInput, SegmentedControl, Select } from "@mantine/core";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import { showError } from "../../utils/alerts";
import ProductList from "../list/ProductList";
import NoBox from "../ui/NoBox";
import AddressForm from "./AddressForm";

function NewOrderForm({loading, accounts, products, setOrder, order, setItem, item, ship_to, setShipping, error}) {
  
  const [itemError, setItemError] = useState(false)

  function addItem() {
    setItemError(true)
    if (!item.design_id || !item.quantity) {
      showError("item-error", "Select a product and quantity!")
    } else {
      setOrder({
        ...order,
        cart: [...order.cart, item],
      })
      setItem({
        design_id: "",
        quantity: undefined
      })
      setItemError(false)
    }
  }
  return ( 
    <>
      <div>Customer</div>

      
      {loading || !accounts? 
        
        <div className="flexbox"><Skeleton style={{ height: "36px", width: "200px"}} /></div> : 
        <Select 
          value={order.account_id} 
          onChange={v => setOrder({ ...order, account_id: v})} 
          data={accounts} 
          error={error && !order.account_id}
          maxDropdownHeight={280}
        />
      }
      <div className="flexbox-row" style={{ margin: "8px 0px"}}>
        <div className="flexbox-column" style={{ marginRight: "10px"}}>
          <div>Product</div>
          {
            loading || !products ? 
            <Skeleton style={{ height: "36px", width: "200px" }} /> : 
            <Select 
              value={item.design_id} 
              onChange={v => setItem({ ...item, design_id: v})} 
              data={products} 
              error={itemError && !item.design_id}
              nothingFound="No products"
              autoComplete="off"
              maxDropdownHeight={280}
              searchable
              limit={20}
            />
          }
        </div>
        
        <div className="flexbox-column" style={{ marginRight: "10px" }}>
          <div style={{ paddingRight: "20px"}}>#</div>
          <NumberInput 
            value={item.quantity} 
            onChange={v => setItem({ ...item, quantity: v})} 
            error={itemError && !item.quantity}
            min={1} 
            placeholder="Qty"
            variant="filled" 
            autoComplete="off"
          />
        </div>

        <Button 
          onClick={addItem} 
          style={{ marginTop: "27.5px" }}
        >
          Add to Order
        </Button>
      </div>
      {
        !order.cart ?
          <div style={{ marginBottom: "25px"}}>
            <NoBox text="No Items" /> :
          </div> :  
          <div className="full-width" style={{ maxWidth: "525px"}}>
            <ProductList items={order.cart} reverse={true} />
          </div>
            
      }
      <div className="flexbox-row full-width" style={{ maxWidth: "400px", justifyContent: "space-around", marginTop: "5px"}}>
        
      <div className="flexbox-column">
        <div>Shipping Provider</div>
        <Select 
          value={order.shipping_provider} 
          onChange={v => setOrder({ ...order, shipping_provider: v})} 
          error={error && !order.shipping_provider}
          data={["UPS", "USPS", "FedEx", "OSM", "DHL"]} 
        />
      </div>
      
      <div className="flexbox-column">
        <div>Production Priority </div>
        <SegmentedControl 
          value={order.priority} 
          onChange={v => setOrder({ ...order, priority: v})} 
          data={["normal", "rush"]} 
        />    
      </div>
      
      </div>
      
      <div style={{ fontSize: "30px", marginTop: "20px"}}>Shipping Address</div>
      <AddressForm shipping={ship_to} setShipping={setShipping} error={error} />
      <div style={{ marginBottom: "15px"}}></div>
    </>
  );
}

export default NewOrderForm
