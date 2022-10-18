import EditIcon from '@mui/icons-material/Edit';

function Images({currentImage, imageList, selectedImage, setSelectedImage, light}) {
  console.log(selectedImage)

  return (
    <>
      {
        imageList.map((item,i) => {
          const selected = true
          const {position, image, width, x, y } = item
          if ( position !== currentImage.position) {
            return null
          } else 
          return(
            <>
              <div
                className="flexbox"
                style={{
                  border: selected ? `2px solid ${light ? "black" : "white"}` : null,
                  position: "absolute",
                  left: x,
                  top: y
                }}>
              <img 
                key={i}
                // onClick={currentImage.image ? "null" : selected ? setSelectedImage(null) : setSelectedImage(item)} 
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
                      // onClick={}
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