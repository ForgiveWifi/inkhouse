import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import OrderDisplay from "../../components/displays/OrderDisplay";
import BackButton from "../../components/ui/buttons/BackButton";
import { showError } from "../../utils/alerts";

function SingleOrder() {

  const { order_id } = useParams() 
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchOrder() {
      try {
        setLoading(true)
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/order/${order_id}`)
        setOrder(res.data)
        setLoading(false)
      }
      catch (err) {
        if (err.response.status === 404) {
          showError("404-error", "Order does not exist!")
        } else {
          showError("server-error", `Problem getting order ID: ${order_id} from inkhouse server!`, err.message)
        }
      }
    }
    fetchOrder()
  },[])
  
  return (
    <>
      <div className="flexbox-column full-width background1 radius15 full-width shadow2" style={{ maxWidth: "700px", padding: "15px", marginTop: "20px"}} >
        <BackButton />
        
        <div className="full-width" style={{ padding: "0px 30px 10px"}}>

          <div className="flexbox-row full-width">
            <h1 style={{ fontSize: "45px", marginRight: "auto" }}>{`Order ID: ${order_id}`}</h1> 
          </div>

          <OrderDisplay order={order} loading={loading}/>
          
        </div>
      </div>
    </>
  );
}

export default SingleOrder;