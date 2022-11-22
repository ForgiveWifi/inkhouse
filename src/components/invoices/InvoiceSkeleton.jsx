import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function InvoiceSkeleton({count}) {

  return (
    Array(count).fill(0).map((_, i) => {
      return (
        <div key={i} className="invoice-item space-between flexbox-row flex-wrap full-width" style={{ height: 75, padding: 15 }}>
          <Skeleton className="radius10" style={{ width: "90px", height: "33.5px", position: 'relative', bottom: "2px" }} />

          <Skeleton className="radius15" style={{ width: "300px", height: "20px", position: 'relative', bottom: "2px" }} />

          <Skeleton className="radius15" style={{ width: "100px", position: 'relative', bottom: "2px" }} />

          <div className="flexbox-column" style={{ width: "100px", position: 'relative', bottom: "2px" }}>
            <Skeleton className="radius15" style={{ width: "90px", height: "20px" }} />
            <Skeleton className="radius15" style={{ width: "70px", height: "20px", marginLeft: "4px" }} />
          </div>
        </div>
      )
    })
  )
}

export default InvoiceSkeleton;