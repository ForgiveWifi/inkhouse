// import { useState } from "react";
import { Select, MultiSelect } from "@mantine/core"
import sortSizes from "../../utils/sortSizes";
import ColorSelect from "../selects/color-select/ColorSelect";

function AttributesSelect({attributes, setAttributes, sizes, setSizes, error}) {

  const data = ["red", "blue","green", "yellow","grey","black","white"]

  // const [ loading, setLoading ] = useState(false)

  return (
    <>
      <div className="flexbox-column full-width" style={{ marginTop: "10px"}}>Attributes</div>
      <div className="flexbox-column background1 padding15 radius15" style={{ paddingTop: "5px"}}>

        <div style={{ maxWidth: "191px"}}>
          <Select 
            label="style"
            value={attributes.style} 
            onChange={style => setAttributes({...attributes, style: style})} 
            error={error && !attributes.style}
            data={["2001"]} 
          />
        </div>

        <div style={{ maxWidth: "250px"}}>
        <MultiSelect 
          label="sizes"
          value={sizes} 
          onChange={sizes => setSizes(sortSizes(sizes))} 
          error={error && sizes.length === 0}
          data={["KIDS","S","M","L","XL","XXL","XXXL"]} 
        />
        </div>
        
        <div className="label">colors</div>
        <ColorSelect colors={data} attributes={attributes} setAttributes={setAttributes}/>
        
      </div>
    </>
  );
}

export default AttributesSelect;