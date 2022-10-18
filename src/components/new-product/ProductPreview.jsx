import { useRef, useState } from "react";
import { motion } from "framer-motion"
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ProductButtons from "./ProductButtons";
import { ImageUpload } from "./ImageUpload";
import CurrentImage from "./CurrentImage";
import Images from "./Images";
import { Button } from "@mantine/core";
import TagDisplay from "./TagDisplay";

function ProductPreview({color, imageList, setImageList, tagList}) {

  const lightColors = ["#DFDEDA", "#A1ACC4", "#FFC632", "#A9BCD2", "#DFB9C7", "#BABBBE", "white"]
  const light = lightColors.includes(color)

  const [currentImage, setCurrentImage] = useState({ position: "front", width: 200, x: 50, y:0})
  const [selectedImage, setSelectedImage] = useState(null)
  const [dragOutline, setDragOutline] = useState(false)

  const {image, position, width, height, x, y} = currentImage
  const front = position === "front"

  return (
    <>
      <div className="flexbox" style={{position: "relative", width: 650, height: 650}}>
        <div style={{position: "absolute", backgroundColor: color, width: "630px", height: "630px"}}></div>
        <img src={require(`../../assets/${front ? "front" : "back"}-blank-tee.png`)} 
          alt="blank-tee" className="radius15" 
          style={{ position: "absolute", width: 650, height: 650, zIndex: 1}} 
          draggable="false" 
        />
        {(tagList && front) && <TagDisplay tagList={tagList} />}
        <div 
          className="flexbox radius5"
          style={{ 
          position: "relative", 
          top: front ? 52 : null, 
          bottom: !front ? 30 : null,
          outline: dragOutline ? `2px dotted ${light ? "black" : "white"}` : null, 
          width: "300px", 
          height: '400px', 
          zIndex: 11
        }}>
          {currentImage.image && <CurrentImage currentImage={currentImage} setCurrentImage={setCurrentImage} setDragOutline={setDragOutline} light={light} />}
          <Images currentImage={currentImage} imageList={imageList} selectedImage={selectedImage} setSelectedImage={setSelectedImage} light={light} />
        </div>
        <ProductButtons currentImage={currentImage} setCurrentImage={setCurrentImage} imageList={imageList} setImageList={setImageList}/>
        <div style={{ position: "absolute", top: 0, right: 0, zIndex: 20}}>
          <div className="flexbox-column" style={{width: 110, margin: 10, gap: 8}}>
            <button onClick={() => setCurrentImage({...currentImage, position: "front"})} className="form-button full-width " style={{ fontSize: 20, padding: "4px 10px" }}>FRONT</button>
            <button onClick={() => setCurrentImage({...currentImage, position: "back"})} className="form-button full-width radius15" style={{ fontSize: 20, padding: "4px 10px"}}>BACK</button>
          </div>
        </div>
        {
          image &&
          <div className="flexbox-column" style={{ position: "absolute", bottom: 0, left: 0, width: 155, height: 360,  zIndex: 20}}>
            <div className="orange-text" style={{ marginTop: "auto"}}>width: {width / 20} in.</div>
            <div className="orange-text">height: {height /20} in.</div>
            <div className="flexbox-column" style={{gap: 5, marginTop: 10}}>
              <button onClick={() => setCurrentImage({...currentImage, y: 0})} className="position-button full-width max-radius">TOP</button>
              <button onClick={() => setCurrentImage({...currentImage, x: (300 - width) / 2})} className="position-button full-width max-radius">CENTER</button>
              <button onClick={() => setCurrentImage({...currentImage, x: 0})} className="position-button full-width max-radius">LEFT</button>
              <button onClick={() => setCurrentImage({...currentImage, x: 300 - width})} className="position-button full-width max-radius" style={{ marginBottom: 55}} >RIGHT</button>
            </div>
          </div>
        }
      </div>
    </>
  );
}


  export default ProductPreview;