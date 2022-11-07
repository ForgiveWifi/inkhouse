import Divider from "../ui/Divider";

function SizeList({sizes}) {
  return (
    <div className="flexbox full-width">
      <div className="flexbox-row background1 radius15 flex-wrap" style={{ padding: "4px 14px"}} > 
        {
          sizes.map((size,i) => {
            if (i === sizes.length - 1) {
              return <h5 style={{ color: "rgba(0, 0, 0, 0.4)"}}>{size}</h5>
            } else {
              return(
                <>
                  <h5 style={{ color: "rgba(0, 0, 0, 0.4)"}}>{size}</h5>
                  <Divider />
                </>
              )
            }
          })
        }
      </div>
    </div>
  );
}

export default SizeList;