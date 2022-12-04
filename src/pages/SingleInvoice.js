import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import OrderDisplay from "../components/invoices/OrderDisplay";
import BackButton from "../components/ui/buttons/BackButton";
import { showError } from "../utils/alerts";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../components/ui/Loading";
import InvoiceDisplay from "../components/invoices/InvoiceDisplay";

function SingleInvoice() {

  const { invoice_id } = useParams() 
  const [invoice, setInvoice] = useState(null)
  const [loading, setLoading] = useState(false)
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    fetchInvoice()

    async function fetchInvoice() {
      try {
        setLoading(true)
        const access_token = await getAccessTokenSilently()
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/invoice/${invoice_id}`, {
          headers: {
            authorization: `Bearer ${access_token}`
          }
        })
        setInvoice(res.data)
        setLoading(false)
      }
      catch (err) {
        if (err.response.status === 404) {
          showError("404-error", "Order does not exist!")
        } else {
          showError("invoice", `Server error - invoice`, "Contact Us!")
        }
      }
    }
  },[])
  console.log(invoice)
  return (
    <>
      { loading && <Loading />}
        <BackButton />
        <InvoiceDisplay loading={loading} invoice={invoice}/>
    </>
  );
}

export default SingleInvoice;