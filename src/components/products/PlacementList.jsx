import PlacementBox from "./PlacementBox";

function PlacementList({designs}) {

  return (
    <>
      <div className="flexbox-column-start full-width radius10" style={{ margin: "15px 20px", gap: "20px"}}>
        <h4>Image List</h4>
        <div className="product-grid">
          {
            designs.map((design, i) => {
              return (
                <PlacementBox key={i} design={design}/>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default PlacementList;