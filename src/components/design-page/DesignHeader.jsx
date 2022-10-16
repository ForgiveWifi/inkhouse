import { Link } from "react-router-dom";
import { Button } from "@mantine/core";
import AddIcon from '@mui/icons-material/Add';

function DesignHeader() {
  return (
    <>
      <div className="full-width" style={{ maxWidth: "1060px", margin: "20px 0px"}}>
        <h1>Designs</h1>
      </div>
      <div className="flexbox-row full-width" style={{ maxWidth: '1060px'}}>
        <Button leftIcon={<AddIcon />} component={Link} to={"/design/new"}>New design</Button>
      </div>
    </>
  );
}

export default DesignHeader;