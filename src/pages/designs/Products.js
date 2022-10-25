import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { showError } from "../../utils/alerts";
import DesignList from "../../components/design-page/DesignList";
import useQuery from "../../utils/useQuery";
import MyPagination from "../../components/ui/buttons/MyPagination";
import { Button } from "@mantine/core";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";

function Products() {

  const query = useQuery()
  const page = query.get("page")
  const navigate = useNavigate()
  
  const [designs, setDesigns] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const fetchDesigns = async () => {
      try {
        setLoading(true)
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/products?page=${page}&limit=20`)
        setDesigns(data.results) 
        setCurrentPage(parseInt(page))
        setTotalPages(data.pages)
        setLoading(false)
      }
      catch (err) {
        showError("design-error", "Problem getting designs from inkhouse server!", "Contact us!") 
      }
    }
    fetchDesigns()
  }, [page])

  function setPageNumber(page) {
    setCurrentPage(page)
    navigate(`/designs/?page=${page}`)
  }

  return (
    <>
      <h1>Products</h1>
      <div className="flexbox-row full-width" style={{ maxWidth: '1060px'}}>
        <Button leftIcon={<AddIcon />} component={Link} to={"/product/new"}>New product</Button>
      </div>
      <DesignList loading={loading} designs={designs} />
      <MyPagination loading={loading} currentPage={currentPage} setPageNumber={setPageNumber} totalPages={totalPages}  />

    </>
  );
}

export default Products;