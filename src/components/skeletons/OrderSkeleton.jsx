import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function OrderSkeleton({ count }) {

  return (
    Array(count).fill(0).map((_, i) => {
      return (
        <div key={i} className="flexbox-row full-width background1 radius15" style={{ justifyContent: "space-between", border: "2px solid white", height: "80px", maxWidth: "600px", marginTop: "15px" }}>
          <Skeleton className="" style={{ borderRadius: "10px", width: "95px", height: "33.5px", marginLeft: "10px", position: 'relative', bottom: "2px" }} />

          <div className='flexbox' style={{ width: "100px" }}>
            <Skeleton className="radius15" style={{ width: "90px", height: "20px", position: 'relative', bottom: "2px" }} />
          </div>

          <div className='flexbox' style={{ width: "60px" }}>
            <Skeleton className="radius15" style={{ width: "40px" }} />
          </div>

          <div className="flexbox-column" style={{ width: "120px", marginRight: "10px", position: 'relative', bottom: "1px" }}>
            <Skeleton className="radius15" style={{ width: "110px", height: "20px" }} />
            <Skeleton className="radius15" style={{ width: "70px", height: "20px", marginLeft: "4px" }} />
          </div>
        </div>
      )
    })
  )
}

export default OrderSkeleton;