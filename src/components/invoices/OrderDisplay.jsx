import { Button } from "@mantine/core";
import toDate from "../../utils/toDate";
import toTime from "../../utils/toTime";
import Divider from "../ui/Divider";
import HorzDivider from "../ui/HorzDivider";
import ShippingBox from "../boxes/ShippingBox";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ShippingBoxSkeleton from "../skeletons/ShippingBoxSkeleton";
import ProductList from "../list/ProductList";

function OrderDisplay({order, loading}) {

  return (
    <>
      <div className="flexbox-column full-width">

        <div className="flexbox-row full-width">
          <h3>{order.id}</h3>
        </div>

        <div className="flexbox-row full-width flex-wrap" style={{ marginBottom: "15px" }}>
          <div>{toDate(order.created, "long")}</div>
          <Divider />
          <div>{toTime(order.created)}</div>

          <div style={{ marginLeft: "auto" }}>
            <Button color="orange" loading={loading} leftIcon={<MyLocationIcon sx={{ fontSize: "20px"}} />} uppercase>Track Order</Button>
          </div>
        </div>

        {/* <ProductList loading={loading} items={order?.order.items} /> */}

        <HorzDivider/>

        <div className="flexbox-row flex-wrap">
          {/* <ShippingBox ship_address={{
            line1: "15708 San Solano Ct",
            city: "Austin",
            state: "TX",
            postal_code: "78738"
          }} /> */}

          <KeyboardDoubleArrowRightIcon sx={{ fontSize: "35px" }} />

          <ShippingBox ship_address={order.customer_shipping} />
        </div>

      </div>
    </>

  );
}

export default OrderDisplay;