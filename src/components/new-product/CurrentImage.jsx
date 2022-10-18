import { useEffect, useRef, useState } from "react"
import { Rnd } from "react-rnd"
import ResizeBox from "./ResizeBox"


function CurrentImage({ currentImage, setCurrentImage, setDragOutline, light }) {

  const {image, width, height, x, y } = currentImage
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(0)

  useEffect(() => {
    setCurrentImage({ ...currentImage, height: ref.current.height })
  }, [loaded])

  document.onkeydown = (e) => {
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

  return (
    <>
      {
        image &&
      <Rnd
        size={{ width: width, height: height }}
        position={{ x: x, y: y }}
        onDragStop={(e, d) => {
          setCurrentImage({ ...currentImage, x: d.x, y: d.y })
          setDragOutline(false)
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setCurrentImage({
            ...currentImage,
            width: parseInt(ref.style.width, 10),
            height: parseInt(ref.style.height, 10),
            ...position
          });
          setDragOutline(false)
        }}
        lockAspectRatio={true}
        bounds="parent"
        minWidth={25}
        enableResizing={{ top: false, bottom: false, left: false, right: false, topRight: true, topLeft: true, bottomRight: true, bottomLeft: true }}
        resizeHandleComponent={{
          topRight: <ResizeBox light={light}/>,
          topLeft: <ResizeBox light={light} />,
          bottomRight: <ResizeBox light={light}/>,
          bottomLeft: <ResizeBox light={light}/>
        }}
        onDragStart={() => {
          setDragOutline(true)
        }}
        onResizeStart={() => {
          setDragOutline(true)
        }}
        style={{
          outline: image ? `2px solid ${light ? "black" : "white"}` : null,
          zIndex: 12
        }}
      >
        <img
          ref={ref}
          draggable="false"
          src={URL.createObjectURL(image)}
          className="full-width"
          onLoad={() => setLoaded(true)}
        />
      </Rnd>
      }
    </>
  )
}

  export default CurrentImage