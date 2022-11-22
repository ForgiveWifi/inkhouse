import Divider from "../ui/Divider";

function SizeList({sizes}) {
  return (
    <>
      <div className="flexbox-row radius15 flex-wrap" > 
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
    </>
  );
}

export default SizeList;