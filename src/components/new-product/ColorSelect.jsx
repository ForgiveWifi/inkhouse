import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ColorSelect({colors, attributes, setAttributes}) {

  const lightColors = ["#DFDEDA", "#A1ACC4", "#FFC632", "#A9BCD2", "#DFB9C7", "#BABBBE", "white", null]

  return (
    <>
      <div className="flexbox-row flex-wrap full-width" style={{ justifyContent: "center"}}>
        {
          colors.map((color,i) => {
            
            const selected = color === attributes.color
            const light = lightColors.includes(color)

            return(
              <>
                <button 
                  key={i}
                  onClick={() => setAttributes({...attributes, color})} 
                  className="flexbox max-radius" 
                  style={{ margin: "5px", backgroundColor: color, width: "40px", height: "40px", outline: !selected ? "none" : light ? "2px solid black" : "2px solid white" }}
                >
                  { selected && <CheckCircleOutlineIcon key={i} sx={{ fill: light ? "black" : "white"}} />}
                </button>
              </>
            )
          })
        }
      </div>
    </>
  );
}
export default ColorSelect;