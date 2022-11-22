import { useState, useEffect } from "react"
import axios from "axios"
import { showError } from "../../utils/alerts"
import ProductSkeleton from "../skeletons/ProductSkeleton"
import ProductBox from "./ProductBox"
import { useAuth0 } from "@auth0/auth0-react"

function ProductList({loading, lines}) {

  const { getAccessTokenSilently } = useAuth0()
  const [products, setProducts] = useState([])
  const [load, setLoad] = useState(false)

  // console.log(products)
  useEffect(() => {
    if (!loading && lines) {
      fetchProducts()
    }
    
    async function fetchProducts() {
      try {
        setLoad(true)
        const access_token = await getAccessTokenSilently()
        const product_list = await Promise.all(lines.data.map(async ({quantity, price, amount, description}) => {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/product/stripe/${price.product}`, {
            headers: {
              authorization: `Bearer ${access_token}`
            }
          })
          const { data } = res
          const { _id, name, images, metadata} = data
          return({
            name: name,
            quantity: quantity,
            amount: amount,
            images: images,
            metadata: metadata
          })
        }))
        setProducts(product_list)
        setLoad(false)
      }
      catch (err) {
        showError("products", "API error - products", "Contact Us!")
      }
    }
    
  },[])
  console.log("line", lines)
  if (loading) {
    return(
      <ProductSkeleton count={lines.total_count} />
    )
  } else
  return (
    <>
      <div className="flexbox-column full-width" style={{ gap: 10 }}>
      {
        products.map( (product,i) => {
          return <ProductBox key={i} product={product} />
        })
      }
      </div>
    </>
  );
}

export default ProductList;