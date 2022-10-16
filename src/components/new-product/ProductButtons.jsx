import { motion } from "framer-motion"
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { ImageUpload } from "./ImageUpload";


function ProductButtons({currentImage, setCurrentImage, imageList, setImageList}) {

  const [uploadModal, setUploadModal] = useState(false)
  
  const { image, position } = currentImage

  function addImageList() {
    setImageList([...imageList, currentImage])
    setCurrentImage({ position: position, width: 200, x: 50, y:0})
  }

  return (
    <>
      <div className="flexbox-row" style={{ position: "absolute", top: "10px", left: "10px", gap: "8px", zIndex: 12 }}>
        <button onClick={image ? () => setCurrentImage({ position: "front", width: 200, x: 50, y:10 }) : () => setUploadModal(true) } className="flexbox max-radius" style={{ backgroundColor: "#FF9244", width: "60px", height: "60px"}}>
          <motion.div animate={{ rotate: uploadModal || image ? 45 : 0}} className="flexbox">
            <AddIcon sx={{ fontSize: "45px" }}/>
          </motion.div>
        </button>
        {
          image && 
          <button onClick={addImageList} className="flexbox max-radius" style={{ backgroundColor: "rgb(30, 179, 30)", width: "60px", height: "60px"}}>
            <DoneOutlineIcon />
          </button>
        }
      </div>
      <ImageUpload currentImage={currentImage} setCurrentImage={setCurrentImage} open={uploadModal} close={() => setUploadModal(false)} />
    </>
  );
}

export default ProductButtons;