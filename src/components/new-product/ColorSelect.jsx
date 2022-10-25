import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Tooltip } from '@mantine/core';
import { colors } from "../../data/colors";

function ColorSelect({ attributes, setAttributes}) {

  return (
    <>
      <div className="flexbox-row flex-wrap full-width" style={{ justifyContent: "center"}}>
        {
          colors.map((color,i) => {
            
            const selected = color.value === attributes.color.value

            const {value, hex, light} = color

            return(
              <>
                <Tooltip label={value}>
                  <button 
                    key={i}
                    onClick={() => setAttributes({...attributes, color: color})} 
                    className="flexbox max-radius" 
                    style={{ margin: "5px", backgroundColor: hex, width: "40px", height: "40px", outline: !selected ? "none" : light ? "2px solid black" : "2px solid white" }}
                  >
                    { selected && <CheckCircleOutlineIcon key={i} sx={{ fill: light ? "black" : "white"}} />}
                  </button>
                </Tooltip>
              </>
            )
          })
        }
      </div>
    </>
  );
}
export default ColorSelect;