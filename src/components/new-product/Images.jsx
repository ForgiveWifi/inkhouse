import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { motion } from "framer-motion"

function Images({currentImage, setCurrentImage, imageList, setImageList, light}) {

  const [hover, setHover] = useState(null)

  function makeCurrentImage(item) {
    setCurrentImage(item)
    setImageList(imageList.filter((image) => image !== item))
  }
  return (
    <>
      {
        imageList.map((item,i) => {
          const selected = !currentImage.image && (hover === i)
          const {position, image, width, x, y } = item
          if ( position !== currentImage.position) {
            return null
          } else 
          return(
            <>
              <div
                className="flexbox"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                style={{
                  outline: selected ? `2px dashed ${light ? "black" : "white"}` : null,
                  position: "absolute",
                  left: x,
                  top: y
                }}>
              <img 
                key={i}
                draggable="false"
                src={URL.createObjectURL(image)} 
                style={{
                  width: width,
                }}
              />
                {
                  selected && 
                  <div style={{ position: "absolute", top: 0, right: 0}}>
                    <button 
                      onClick={() => makeCurrentImage(item)}
                      className="flexbox max-radius" style={{ position: "relative", bottom: 10, left: 10, backgroundColor: light ? "black" : "white", width: 20, height: 20}}>
                      <EditIcon style={{ fill: light ? "white" : "black", fontSize: 14}} />
                    </button>
                  </div>
                }
              </div>
            </>
          )
        })
      }
    </>
  );
}

export default Images;