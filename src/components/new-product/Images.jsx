function Images({currentImage, imageList}) {
  return (
    <>
      {
        imageList.map((item,i) => {
          const {position, image, width, x, y } = item
          if ( position !== currentImage.position) {
            return null
          } else 
          return(
            <>
              <img 
                key={i}

                draggable="false"
                src={URL.createObjectURL(image)} 
                style={{
                  position: "absolute",
                  width: width,
                  left: x,
                  top: y
                }}
                onLoad={console.log("loaded")}
              />
            </>
          )
        })
      }
    </>
  );
}

export default Images;