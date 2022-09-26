import PlacementBox from "../boxes/PlacementBox";

function PlacementList({designs}) {

  return (
    <>
      <div className="flexbox-column full-width radius10" style={{ margin: "15px 0px", gap: "20px"}}>
        <div className="flexbox full-width">Placement List</div>
        {
          designs.map((design, i) => {
            return (
              <PlacementBox key={i} design={design}/>
            )
          })
        }
      </div>
    </>
  );
}

export default PlacementList;