import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { TextInput, Button } from "@mantine/core";
import AddIcon from '@mui/icons-material/Add';
import { showError } from "../../utils/alerts";
import HorzDivider from "../ui/HorzDivider";

function InvoicesHeader() {
  
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  function searchInvoice() {
    if (search) {
      navigate(search)
    } else {
      showError("search-error", "Please enter an Invoice ID!")
    }
  }

  return (
    <>
      <div className="flexbox-column"> 
        <h1 className="full-width">Invoices</h1>

        <div className="flexbox-row full-width flex-wrap" style={{ marginTop: 13}}>

          <Button onClick={() => navigate("new")} leftIcon={<AddIcon />}>New Invoice</Button>

          <div className="flexbox-row full-width" style={{maxWidth: "300px", marginTop: "5px", marginLeft: "auto"}}>
            <TextInput className="full-width" autoComplete="off" placeholder="Search by Invoice ID..." value={search} onChange={(event) => setSearch(event.currentTarget.value)} />
            <Button onClick={searchInvoice} style={{ marginLeft: "10px"}} uppercase>
              Search
            </Button>
          </div>
        </div>
        
        <div className="flexbox-row full-width space-between" style={{ margin: "20px 0px 3px", padding: "0px 20px"}}>
          <h5> status</h5>
          <h5>ID</h5>
          <h5>price</h5>
          <h5>date</h5>
        </div>  

          <HorzDivider width="98%"/>

        
      </div>
      
    </>
  );
}

export default InvoicesHeader;