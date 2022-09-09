import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DesignHeader from "../../components/headings/DesignHeader";
import { showError } from "../../utils/alerts";
import DesignList from "../../components/list/DesignList";
import useQuery from "../../utils/useQuery";
import MyPagination from "../../components/ui/buttons/MyPagination";

function Shirts() {

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
        const {data} = await axios.get(`http://localhost:3010/design?page=${page}&limit=20`)
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
      <DesignHeader />
     
      <DesignList loading={loading} designs={designs} />
      
      <MyPagination loading={loading} currentPage={currentPage} setPageNumber={setPageNumber} totalPages={totalPages}  />

    </>
  );
}

export default Shirts;