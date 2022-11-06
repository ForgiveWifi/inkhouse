
function SizeList({sizes}) {
  return (
    <>
      <div className="flexbox-row flex-wrap" style={{ maxWidth: "200px", justifyContent: "center"}}> 
        {
          sizes.map((size,i) => {
              return(<h4 key={i} className="background1 radius15" style={{ border: "1px solid white", padding: "4px 20px", margin: "3px"}}>{size.toUpperCase()}</h4>)
          })
        }
      </div>
    </>
  );
}

export default SizeList;