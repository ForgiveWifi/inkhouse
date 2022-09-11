import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import OrderList from "../../components/list/OrderList"
import { showError } from "../../utils/alerts";
import OrdersHeading from "../../components/headings/OrdersHeading";
import useQuery from "../../utils/useQuery";
import MyPagination from "../../components/ui/buttons/MyPagination";

function Orders() {

  const query = useQuery()
  const page = query.get("page")
  const navigate = useNavigate()
  
  const [orders, setOrders] = useState(null)
  const [currentPage, setPage] = useState(null)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true)
        const {data} = await axios.get(`https://inkhouse-api.herokuapp.com/order?page=${page}&limit=15`)
        setOrders(data.results) 
        setPage(parseInt(page))
        setTotalPages(data.pages)
        setLoading(false)
      }
      catch (err) {
        showError("orders-error", "Problem getting orders from inkhouse server", "Contact us!") 
      }
    }
    fetchOrders() 
  }, [page])

  function setPageNumber(page) {
    setPage(page)
    navigate(`/orders/?page=${page}`)
  }

  return (
    <>
      <OrdersHeading />
      <OrderList loading={loading} orders={orders} />
      <MyPagination loading={loading} currentPage={currentPage} totalPages={totalPages} setPageNumber={setPageNumber} />
    </>
  );
}

export default Orders;