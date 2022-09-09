import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { TextInput, Button } from "@mantine/core";
import AddIcon from '@mui/icons-material/Add';
import { showError } from "../../utils/alerts";
import HorzDivider from "../ui/HorzDivider";

function OrdersHeader() {
  
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  function searchOrder() {
    if (search) {
      navigate(`/order/${search}`)
    } else {
      showError("search-error", "Please enter an order ID!")
    }
  }

  return (
    <>
      <div className="flexbox-row full-width flex-wrap" style={{ justifyContent: "space-between", maxWidth: "600px", margin: "20px 0px 5px", padding: "0px 15px"}}>
        <h1 style={{ marginRight: "20px"}}>Orders</h1>
        <div className="flexbox-row full-width" style={{maxWidth: "300px", marginTop: "5px", marginLeft: "auto"}}>
          <TextInput className="full-width" type="number" autoComplete="off" placeholder="Search by Order ID..." value={search} onChange={(event) => setSearch(event.currentTarget.value)} />
          <Button onClick={searchOrder} style={{ marginLeft: "10px"}} uppercase>
            Search
          </Button>
        </div>
      </div> 

      <div className="full-width" style={{ maxWidth: "600px"}}>
        <Button onClick={() => navigate("/order/new")} leftIcon={<AddIcon />} style={{ position: "relative", top: "10px"}}>New order</Button>
      </div>
      
      <div className="flexbox-row full-width" style={{ justifyContent: "space-between", margin: "10px 0px 5px", maxWidth: "600px", position: "relative", top: "13px"}}>
        <h4 className="flexbox" style={{ width: "95px", marginLeft:"10px"}}>
          Order ID
        </h4>
        <h4 className="flexbox" style={{ width: "100px"}} >Company</h4>
        <h4 className="flexbox" style={{ width: "60px"}}>Shirts</h4>
        <h4 className="flexbox no-wrap" style={{ width: "120px", marginRight: "10px"}}>
          Order Date
        </h4>
      </div>
    </>
  );
}

export default OrdersHeader;