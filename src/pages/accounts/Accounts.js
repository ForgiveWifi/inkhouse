import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";
import Header from "../../components/ui/Header";
import { showError } from "../../utils/alerts";
import AddIcon from '@mui/icons-material/Add';
import AccountList from "../../components/list/AccountList";
import useQuery from "../../utils/useQuery";
import MyPagination from "../../components/ui/buttons/MyPagination";

function Accounts() {
 
  const query = useQuery()
  const page = query.get("page")
  const navigate = useNavigate()
  
  const [accounts, setAccounts] = useState(null)
  const [currentPage, setPage] = useState(null)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const {data} = await axios.get(`http://localhost:3010/account/?page=${page}&limit=15`)
        setAccounts(data.results) 
        setPage(parseInt(page))
        setTotalPages(data.pages)
        setLoading(false)
      }
      catch (err) {
        showError("accounts-error", "Problem getting accounts from inkhouse server!", "Contact us!") 
      }
    }
    fetchUsers()
  }, [page])

  function setPageNumber(page) {
    setPage(page)
    navigate(`/accounts/?page=${page}`)
  }

  return (
    <>
      <div className="full-width" style={{ maxWidth: "900px"}}>
        <Header title="Accounts" />
        <Button onClick={() => navigate("/account/new")} leftIcon={<AddIcon />}>New Account</Button>
      </div>

      <AccountList loading={loading} accounts={accounts} />
      
      <MyPagination loading={loading} currentPage={currentPage} totalPages={totalPages} setPageNumber={setPageNumber} />
    </>
  );
}

export default Accounts;