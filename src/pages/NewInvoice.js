import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import NewInvoiceForm from "../components/new-invoice/NewInvoiceForm"
import BackButton from "../components/ui/buttons/BackButton";
import Header from "../components/ui/Header";
import { showError, showLoading, updateError, updateSuccess } from "../utils/alerts";

function NewInvoice() {

  const blank = {
    shipping_provider: "",
    priority: "normal", 
    cart: []
  }
  
  const { getAccessTokenSilently } = useAuth0()
  const [invoice, setInvoice] = useState(blank)
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  
  useEffect(() => {
    // fetchInvoiceData()
    // async function fetchInvoiceData() {
    //   try {
    //     setLoading(true)
    //     const res2 = await axios.get(`${process.env.REACT_APP_API_URL}/invoice/products`)
    //     setProducts(res2.data)
    //     setLoading(false)
    //   }
    //   catch (err) {
    //     showError("new-invoice-data", "Problem getting data from server!", err.message)
    //   }
    // }
  },[])


  async function createNewinvoice() {
    setError(true)
    if (invoice.cart.length === 0) {
      showError("cart-error", "Add products to the invoice!")
    } else 
    if (!invoice.shipping_provider) {
      showError("provider-error", "Select a shipping provider!")
    } else {

    const metadata = {
      items: invoice.cart,
      shipping_provider: invoice.shipping_provider,
      production_priority: invoice.priority,
    } 

    const invoice_data = {
      ...metadata
    }
    showLoading("new-invoice", "Creating new invoice...")
    try {
      const access_token = await getAccessTokenSilently()
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/invoice`, invoice_data, {
        header: {
          authorization: `Bearer ${access_token}`
        }
      })
      setError(false)
      setInvoice(blank)
      updateSuccess("new-invoice", res.data.id, "Created invoice with ID:")
    }
    catch {
      updateError("new-invoice", "Problem creating invoice", "Contact Us!")
    }}
  }

  return (
    <>
      <BackButton />
      <div style={{ margin: 40, marginTop: 60}}>
        <Header title="New Invoice" />
        <NewInvoiceForm
          loading={loading}
          invoice={invoice}
          products={products}
          setInvoice={setInvoice}
          error={error}  
        />
        <Button onClick={createNewinvoice} uppercase>submit</Button>
      </div>
      
    </>
  );
}

export default NewInvoice;
  