import { toTime, toDate } from "../../utils/time";
import PlacementList from "./PlacementList";
import Divider from "../ui/Divider";
import CopyID from "./CopyID";
import SizeList from "./SizeList";
import { Button } from "@mantine/core";
import Loading from "../ui/Loading";
// import CopyIcon from "../ui/icons/CopyIcon";
import { TbDownload } from "react-icons/tb"
import ProductCarousel from "./ProductCarousel";
import { useState } from "react";

function ProductDisplay({loading, product}) {

  const [currentSlide, setCurrentSlide] = useState(0)

  console.log(product)
  if (!product) {
    return <Loading />
  } else {
  const { _id, name, description, sizes, images, created_at,} = product
  // const {style, size, color} = attributes 

  return (
    <>
      {loading && <Loading /> }
      <div className="flexbox-row-start full-width flex-wrap" style={{ padding: "0px 30px 10px", marginTop: 80, gap: 20 }}>
        <div className="flexbox-column" style={{ gap: 10}}>
          <ProductCarousel images={images} name={name} setCurrentSlide={setCurrentSlide}/>
          {/* <Button onClick={() => downloadImage(images[currentSlide])} leftIcon={<TbDownload style={{ fontSize: 20}} />}> Download</Button> */}
        </div>

        <div className="flexbox-column-start" style={{ margin: 0}}>
          <h1 style={{ fontSize: "45px"}}>
            {name}
          </h1>
          <div className="flexbox-row" style={{ marginTop: 5, gap: 10}}>
            <h5 style={{ marginTop: 2}}>ID: {product._id}</h5>
            <CopyID text="Copy ID" value={_id} />
          </div>
          <div>{description}</div>

          <div style={{ marginTop: 15}}>
            <h5>color</h5> 
            <div>{product.color}</div>
            <h5>available sizes</h5>
            <SizeList sizes={sizes} />
            {sizes.map((size, i) => {
              return(
                <div className="flexbox-row">
                  <div>{size}</div>
                  <div>cost</div>
                </div>
              )
            })}
            
          </div>

          <div style={{ marginTop: 15}}>
            <h5>Created on:</h5>
            <div className="flexbox-row" style={{ marginBottom: "15px"}}>
                <h5>{toDate(created_at, "long")}</h5>
              <Divider />
                <h5>{toTime(created_at)}</h5>
            </div>
          </div>
        </div>
        
      </div>
      <PlacementList designs={product.designs}/>
    </>
  )};
}

export default ProductDisplay;