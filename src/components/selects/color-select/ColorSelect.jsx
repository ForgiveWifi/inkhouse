import ColorPalette from "./ColorPalette";
import SelectedColor from "./SelectedColor";

function ColorSelect({colors, attributes, setAttributes}) {

  return (
    <>
        <div className="flexbox-row flex-wrap" style={{ maxWidth: "200px", justifyContent: "center"}}>
        {
          colors.map((color,i) => {
            if (color === attributes.color) {
              return <SelectedColor key={i} color={color} />
            } else {
              return(
                <ColorPalette key={i} color={color} attributes={attributes} setAttributes={setAttributes} />
              )
            }
          })
        }
        </div>
    </>
  );
}

export default ColorSelect;