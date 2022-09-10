import { Button } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import NewOrderForm from "../../components/forms/NewOrderForm"
import BackButton from "../../components/ui/buttons/BackButton";
import Header from "../../components/ui/Header";
import { showError, showLoading, updateError, updateSuccess } from "../../utils/alerts";

function NewOrder() {

  const blank = {
    account_id: "",
    shipping_provider: "",
    priority: "normal", 
    cart: []
  }

  const [accounts, setAccounts] = useState([])
  const [products, setProducts] = useState([])

  const [order, setOrder] = useState(blank)
  const [item, setItem] = useState({})
  const [ship_to, setShipping] = useState({})

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    fetchNewOrderData()

    async function fetchNewOrderData() {
      try {
        setLoading(true)
        const res1 = await axios.get("http://localhost:3010/order/accounts")
        const res2 = await axios.get("http://localhost:3010/order/products")
        setAccounts(res1.data)
        setProducts(res2.data)
        setLoading(false)
      }
      catch (err) {
        showError("new-order-data", "Problem getting data from server!", err.message)
      }
    }
  },[])


  function createNewOrder() {
    setError(true)
    
    if (!order.account_id) {
      showError("customer-error", "Select a customer!")
    } else 
    if (order.cart.length === 0) {
      showError("cart-error", "Add products to the order!")
    } else 
    if (!order.shipping_provider) {
      showError("provider-error", "Select a shipping provider!")
    } else {
    const {company_name, first_name, last_name, address, city, state, zip_code, country } = ship_to
    if (!((first_name && last_name) || company_name)) {
      showError("shipping-name-error", "Must contain a company name or first and last name!")
    } else 
    if (!address || ! city || !state || !zip_code || !country) {
      showError("shipping-details-error", "Fill in shipping details!")    
    } else {

    const data = {
      account_id: order.account_id,
      items: order.cart,
      shipping_provider: order.shipping_provider,
      ship_to: ship_to,
      production_priority: order.priority,
    } 

    showLoading("new-order", "Creating new order...")
    axios.post("http://localhost:3010/order", data)
      .then((res) => {
        setError(false)
        setOrder(blank)
        setShipping({
          company_name: "",
          first_name: "",
          last_name: "",
          address: "",
          address_2: "",
          city: "",
          state: "",
          zip_code: "",
          country: "",
        })
        updateSuccess("new-order", res.data._id, "Created order with ID:")
      })
      .catch((err) => {
        updateError("new-order", "Problem uploading order to server!", err.message)
      })
    }}
  }

  return (
    <>
      <BackButton />
      <Header title="New Order" />

      <NewOrderForm
        loading={loading}
        accounts={accounts}
        products={products}
        order={order} 
        setOrder={setOrder} 
        item={item}
        setItem={setItem} 
        ship_to={ship_to} 
        setShipping={setShipping}
        error={error}  
      />
      <Button onClick={createNewOrder} uppercase>submit</Button>
    </>
  );
}

export default NewOrder;
  