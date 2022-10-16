import { useEffect, useRef, useState } from "react"
import { Rnd } from "react-rnd"
import ResizeBox from "./ResizeBox"


function CurrentImage({ currentImage, setCurrentImage, setDragOutline }) {

  const {image, width, height, x, y } = currentImage
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(0)

  useEffect(() => {
    setCurrentImage({ ...currentImage, height: ref.current.height })
  }, [loaded])

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
          topRight: <ResizeBox />,
          topLeft: <ResizeBox />,
          bottomRight: <ResizeBox />,
          bottomLeft: <ResizeBox />
        }}
        onDragStart={() => {
          setDragOutline(true)
        }}
        onResizeStart={() => {
          setDragOutline(true)
        }}
        style={{
          outline: image ? "2px solid black" : null,
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