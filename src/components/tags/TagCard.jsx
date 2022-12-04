import { Button } from "@mantine/core";
import DesignBox from "../products/DesignBox";

function TagCard({tag, deleteSize}) {

  const {size, design} = tag
  
  return (
    <>
      <div className="flexbox-row radius5 full-width flex-wrap" style={{ padding: 20}}>
        <DesignBox design={design}/>
        <div className="flexbox-row full-width" style={{ marginBottom: "auto"}}>
          <div>
            <div>Size</div>
            <h5>{size}</h5>
          </div>
          <Button className="margin-left" onClick={() => deleteSize(tag)} >delete</Button>
        </div>
      </div>
    </>
  );
}

export default TagCard;