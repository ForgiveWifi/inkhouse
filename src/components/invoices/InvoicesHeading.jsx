import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { TextInput, Button } from "@mantine/core";
import AddIcon from '@mui/icons-material/Add';
import { showError } from "../../utils/alerts";

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

        <div className="flexbox-row full-width flex-wrap" style={{ marginTop: 15}}>

          {/* <Button onClick={() => navigate("new")} leftIcon={<AddIcon />}>New Invoice</Button> */}

          {/* <div className="flexbox-row full-width" style={{maxWidth: "300px", marginTop: "5px"}}>
            <TextInput className="full-width" autoComplete="off" placeholder="Search by Invoice ID..." value={search} onChange={(event) => setSearch(event.currentTarget.value)} />
            <Button onClick={searchInvoice} style={{ marginLeft: "10px"}} uppercase>
              Search
            </Button>
          </div> */}
        </div>
        
        <div className="flexbox-row full-width space-between" style={{ margin: "10px 0px 3px", padding: "0px 15px"}}>
          <h5 className="text-center" style={{width: 90}}> status</h5>
          <h5 className="text-center" style={{ width: 300}}>ID</h5>
          <h5 className="text-center" style={{ width: 100}}>total</h5>
          <h5 className="text-center" style={{ width: 70}}>items</h5>
          <h5 className="text-center" style={{ width: 100}}>due date</h5>
        </div>  


        
      </div>
      
    </>
  );
}

export default InvoicesHeader;