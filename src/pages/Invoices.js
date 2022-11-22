import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import InvoiceList from "../components/invoices/InvoiceList"
import { showError } from "../utils/alerts";
import InvoicesHeading from "../components/invoices/InvoicesHeading";
import useQuery from "../utils/useQuery";
import MyPagination from "../components/ui/buttons/MyPagination";
import { useAuth0 } from "@auth0/auth0-react";

function Invoices() {

  const query = useQuery()
  const page = query.get("page")
  const navigate = useNavigate()
  
  const [invoices, setInvoices] = useState(null)
  const [currentPage, setPage] = useState(null)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  const { getAccessTokenSilently } = useAuth0()
  
  useEffect(() => {
    async function fetchInvoices() {
      try {
        setLoading(true)
        const access_token = await getAccessTokenSilently()
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/invoice?page=${page}&limit=15`, {
          headers: {
            authorization: `Bearer ${access_token}`
          }
        })
        setInvoices(data.data) 
        setPage(parseInt(page))
        setTotalPages(10)
        setLoading(false)
      }
      catch (err) {
        showError("invoices", "API error - invoices", "Contact us!") 
      }
    }
    fetchInvoices() 
  }, [page])

  function setPageNumber(page) {
    setPage(page)
    navigate(`/invoices/?page=${page}`)
  }

  return (
    <>
      <div style={{ margin: 40 }}>
        <InvoicesHeading />
        <InvoiceList loading={loading} invoices={invoices} />
        {/* <MyPagination loading={loading} currentPage={currentPage} totalPages={totalPages} setPageNumber={setPageNumber} /> */}
      </div>
    </>
  );
}

export default Invoices;