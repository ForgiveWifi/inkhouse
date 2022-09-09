import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

function ColorSkeleton({count}) {
  return (
    Array(count).fill(0).map((_, i) => {
      return <Skeleton key={i} style={{ width: "40px", height: "40px", margin: "5px"}} />
    })
  );
}

export default ColorSkeleton;