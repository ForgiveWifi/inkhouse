import { Button } from "@mantine/core";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { MdPayment } from "react-icons/md"
import {CgFileDocument} from "react-icons/cg"

function InvoiceButtons({order, status}) {
  const draft = order.status === "draft"
  const open = order.status === "open"
  const paid = order.status === "paid"

  if (draft) {
    return null
  }
  return (
    <div className="flexbox-row" style={{ gap: 15 }}>
        <a href={order.hosted_invoice_url} target="_blank" rel="noopener noreferrer">
          <Button
            leftIcon={open ? <MdPayment style={{fontSize: 20}}/> : <CgFileDocument style={{fontSize: 20}}/>}>
            {
              open ?
              "Pay" :
              "Invoice"
            }
          </Button>
        </a>
      {
        paid &&
        <Button color="orange" leftIcon={<MyLocationIcon sx={{ fontSize: "20px"}} />} uppercase>Track Order</Button>
      }
    </div>
  );
}

export default InvoiceButtons;