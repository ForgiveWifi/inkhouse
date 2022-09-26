import { useState, useEffect } from "react"
import axios from "axios"
import { showError } from "../../utils/alerts"
import ProductSkeleton from "../skeletons/ProductSkeleton"
import ProductBox from "../boxes/ProductBox"

function ProductList({loading, items, reverse}) {

  const [products, setProducts] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (!loading && items) {
      fetchShirts()
    }
    
    async function fetchShirts() {
      try {
        setLoad(true)
        const design_list = await Promise.all(items.map(async ({quantity, design_id}) => {
          const design = await axios.get(`${process.env.REACT_APP_API_URL}/design/${design_id}`)
          return({
            quantity: quantity,
            design: design.data
          })
        }))
        setProducts(design_list)
        setLoad(false)
      }
      catch (err) {
        showError("server-alert", "Problem getting designs from server!", err.message)
      }
    }
    
  },[items])

  if (loading || items === null) {
    return(
      <ProductSkeleton count={1} />
    )
  } else
  return (
    <>
      {
        load ? 
        <ProductSkeleton count={items?.length} /> :
        reverse ? [...products].reverse().map((product,i) => {
          return <ProductBox key={i} product={product} />
        }) :
        products.map( (product,i) => {
          return <ProductBox key={i} product={product} />
        })
      }
    </>
  );
}

export default ProductList;