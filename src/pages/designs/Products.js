import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { showError } from "../../utils/alerts";
import useQuery from "../../utils/useQuery";
import MyPagination from "../../components/ui/buttons/MyPagination";
import { Button, Modal } from "@mantine/core";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProductList from "../../components/products/ProductList";
import Loading from "../../components/ui/Loading";
import NewProduct from "../NewProduct";
import CloseButton from "../../components/ui/buttons/CloseButton";

function Products() {

  const { getAccessTokenSilently } = useAuth0()

  const query = useQuery()
  const page = query.get("page")
  const navigate = useNavigate()
  
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const access_token = await getAccessTokenSilently()
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/product?page=${page}&limit=18`, {
          headers: {
            authorization: `Bearer ${access_token}` 
          }
        })
        const {data} = res
        setProducts(data.results) 
        setCurrentPage(parseInt(page))
        setTotalPages(data.pages)
        setLoading(false)
      }
      catch (err) {
        showError("design-error", "Server error: products", "Contact us!") 
      }
    }
    fetchProducts()
  }, [page])

  function setPageNumber(page) {
    setCurrentPage(page)
    navigate(`/product/?page=${page}`)
  }

  return (
    <>
      { loading && <Loading /> }
      <div style={{ margin: 40}}>
      <h1 className="full-width">Products</h1>
      <div className="full-width">
        <Button onClick={() => setOpen(true)} leftIcon={<AddIcon />} style={{ marginTop: 15}}>New product</Button>
      </div>
      <Modal 
        opened={open}
        withCloseButton={false}
        size="auto"
      >
        <CloseButton onClick={() => setOpen(false)} />
        <NewProduct />
      </Modal>
      <ProductList products={products}/>
      <MyPagination loading={loading} currentPage={currentPage} setPageNumber={setPageNumber} totalPages={totalPages}  />
      </div>
    </>
  );
}

export default Products;