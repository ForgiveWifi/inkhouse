import { useRef, useState } from "react";
import { motion } from "framer-motion"
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ProductButtons from "./ProductButtons";
import { ImageUpload } from "./ImageUpload";
import CurrentImage from "./CurrentImage";
import Images from "./Images";
import { Button } from "@mantine/core";

function ProductPreview({color, imageList, setImageList, tagList}) {

  const [currentImage, setCurrentImage] = useState({ position: "front", width: 200, x: 50, y:0})
  const [dragOutline, setDragOutline] = useState(false)

  console.log(currentImage)
  const {image, position, width, height, x, y} = currentImage
  const front = position === "front"

  if (image) {
    document.onkeydown = (e) => {
      console.log("click")
      e.preventDefault()
      switch (e.keyCode) {
        case 37:
          if (x > 0) {
            if (x <= 1) {
              setCurrentImage({ ...currentImage, x: 0 })
            } else
            setCurrentImage({ ...currentImage, x: x - 1 })
          }
          break;
        case 38:
          if (y > 0) {
            if (y <= 1) {
              setCurrentImage({ ...currentImage, y: 0 })
            } else
            setCurrentImage({ ...currentImage, y: y - 1 })
          }
          break;
        case 39:
          if (x < 300 - width ) {
            if (x >= 299 - width) {
              setCurrentImage({ ...currentImage, x: 300 - width })
            } else
            setCurrentImage({ ...currentImage, x: x + 1 })
          }
          break;
        case 40:
          if (y < 400 - height) {
            if (y >= 399 - height) {
              setCurrentImage({ ...currentImage, y: 400 - height })
            } else
            setCurrentImage({ ...currentImage, y: y + 1 })
          }
          break;
      }
    }
  }

  return (
    <>
      <div className="flexbox" style={{position: "relative", width: 650, height: 650}}>
        <div style={{position: "absolute", backgroundColor: color, width: "630px", height: "630px", filter: "saturate(80%)"}}></div>
        <img src={require(`../../assets/${front ? "front" : "back"}-blank-tee.png`)} 
          alt="blank-tee" className="radius15" 
          style={{ position: "absolute", width: 650, height: 650, zIndex: 1}} 
          draggable="false" 
        />
        <div 
          className="flexbox radius5"
          style={{ 
          position: "relative", 
          top: front ? 30 : null, 
          bottom: !front ? 50 : null,
          outline: dragOutline ? `1px solid white` : null, 
          width: "300px", 
          height: '400px', 
          zIndex: 11
        }}>
          { image && <CurrentImage currentImage={currentImage} setCurrentImage={setCurrentImage} setDragOutline={setDragOutline} />}
          <Images currentImage={currentImage} imageList={imageList}/>
        </div>
        <ProductButtons currentImage={currentImage} setCurrentImage={setCurrentImage} imageList={imageList} setImageList={setImageList}/>
        <div style={{ position: "absolute", top: 0, right: 0, zIndex: 20}}>
          <div className="flexbox-column" style={{width: 110, margin: 8}}>
            <button onClick={() => setCurrentImage({...currentImage, position: "front"})} className="orange-text full-width " style={{ marginBottom: 3, outline: "3px solid grey", fontSize: 20, borderRadius: "10px 10px 0px 0px"}}>FRONT</button>
            <button onClick={() => setCurrentImage({...currentImage, position: "back"})} className="orange-text full-width radius15" style={{ outline: "3px solid grey", borderRadius: "0px 0px 10px 10px", fontSize: 20}}>BACK</button>
          </div>
        </div>
        {
          image &&
          <div className="flexbox-column" style={{ position: "absolute", bottom: 0, left: 0, padding: 10, marginBottom: 100, zIndex: 20}}>
            <button onClick={() => setCurrentImage({...currentImage, y: 0})} className="orange-text">TOP</button>
            <button onClick={() => setCurrentImage({...currentImage, x: (300 - width) / 2})} className="orange-text">CENTER</button>
            <button onClick={() => setCurrentImage({...currentImage, x: 0})} className="orange-text">LEFT</button>
            <button onClick={() => setCurrentImage({...currentImage, x: 300 - width})}className="orange-text">RIGHT</button>
            <div className="orange-text">width: {width / 20} in.</div>
            <div className="orange-text">height: {height /20} in.</div>
          </div>
        }
      </div>
    </>
  );
}


  export default ProductPreview;