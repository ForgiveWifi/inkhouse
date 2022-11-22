import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/products/ProductDisplay";
import BackButton from "../components/ui/buttons/BackButton";
import { showError } from "../utils/alerts";

function SingleProduct() {

  const { product_id } = useParams()
  const { getAccessTokenSilently } = useAuth0()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState()

  useEffect(() => {
    fetchProduct()
    async function fetchProduct() {
      try {
        setLoading(true)
        const access_token = await getAccessTokenSilently()
        console.log(product_id)
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/${product_id}`, {
          headers: {
            authorization: `Bearer ${access_token}`
          }
        })
        setProduct(res.data)
        setLoading(false)
      }
      catch (err) {
        if (err.response.status === 404) {
          showError("404-error", "Product does not exist!")
        } else {
          showError("server-error", `API error - product`, "Contact Us!")
        }
      }
    }
  },[])
  return (
    <>
      <BackButton />
      <ProductDisplay loading={loading} product={product} />
    </>
  );
}

export default SingleProduct;