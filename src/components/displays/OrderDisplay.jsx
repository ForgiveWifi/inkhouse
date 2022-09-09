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

  const skeleton = loading || order === null

  return (
    <>
      <div className="flexbox-column full-width" style={{ padding: "4px 4px 0px" }}>

        <div className="flexbox-row full-width">
          {skeleton ? <Skeleton className="radius10" style={{ width: "90px", height: "24.5px" }} /> : <div>{order.account.name}</div>}
        </div>

        <div className="flexbox-row full-width flex-wrap" style={{ marginBottom: "15px" }}>
          {skeleton ? <Skeleton className="radius10" style={{ width: "150px", height: "24.5px" }} /> : <div>{toDate(order.created_at, "long")}</div>}
          <Divider />
          {skeleton ? <Skeleton className="radius10" style={{ width: "70px", height: "24.5px" }} /> : <div>{toTime(order.created_at)}</div>}

          <div style={{ marginLeft: "auto" }}>
            <Button color="orange" loading={loading} leftIcon={<MyLocationIcon sx={{ fontSize: "20px"}} />} uppercase>Track Order</Button>
          </div>
        </div>

        <ProductList loading={loading} items={order?.order.items} />

        <HorzDivider />

        <div className="flexbox-row flex-wrap">
          {skeleton ? <ShippingBoxSkeleton /> : <ShippingBox ship_address={order.order.ship_from} />}

          <KeyboardDoubleArrowRightIcon sx={{ fontSize: "35px" }} />

          {skeleton ? <ShippingBoxSkeleton /> : <ShippingBox ship_address={order.order.ship_to} />}
        </div>

      </div>
    </>

  );
}

export default OrderDisplay;