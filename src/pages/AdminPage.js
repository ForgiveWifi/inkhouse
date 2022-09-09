import { Link } from "react-router-dom"
import { Button } from "@mantine/core"

function AdminPage() {
  return (
    <>
      <div className="flexbox-row" style={{ gap: "10px"}}> 

        <Button component={Link} to="/accounts/?page=1">accounts</Button>
        
        <Button component={Link} to="/orders/?page=1">orders</Button>

        <Button component={Link} to="/designs/?page=1">designs</Button>

      </div>
    </>
  );
}

export default AdminPage;