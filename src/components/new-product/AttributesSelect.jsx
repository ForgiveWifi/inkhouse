import { Select, MultiSelect } from "@mantine/core"
import sortSizes from "../../utils/sortSizes";
import ColorSelect from "./ColorSelect";
import SizeList from "./SizeList";
import SizeSelect from "./SizeSelect";

function AttributesSelect({attributes, setAttributes, sizes, setSizes, error}) {

  const data = ["#5C554C", "#DFDEDA", "#505356", "#A1ACC4", "black", "#3A3030", "#692A36", "#303F3E", "#FFC632", "#306D59", "#A9BCD2", "#4B2930", "#313140", "#ECA05D", "#DFB9C7", "#942F35", "#BABBBE", "#522E64", "#234684","#72A4C5", "white"]
  
  return (
    <>
      <div className="flexbox-start full-width">
      
        <div style={{ maxWidth: "191px"}}>
          <Select 
            label="style"
            value={attributes.style} 
            onChange={style => setAttributes({...attributes, style: style})} 
            error={error && !attributes.style}
            data={["2001"]} 
          />
        </div>

        <div className="label">colors</div>
        <ColorSelect colors={data} attributes={attributes} setAttributes={setAttributes}/>

        <div className="label">sizes</div>
        <SizeSelect sizes={sizes} setSizes={setSizes} sizeOptions={["S", "M", "L", "XL", "2XL", "3XL"]} />
      </div>
    </>
  );
}

export default AttributesSelect;