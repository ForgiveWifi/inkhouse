
function PlacementBox({ design }) {

  const { width, height, x_offset, y_offset, art_file } = design

  return (
    <>
      <div className="flexbox-column background1 full-width radius15" style={{ width: "300px", marginTop: "10px"}}>
        <img 
          src={ art_file instanceof File ? URL.createObjectURL(art_file) : design.art_url }
          alt={ art_file instanceof File ? art_file.name : art_file}
          className="full-width shadow-2" 
          style={{ borderRadius: "15px 15px 0px 0px" }} />

        <div className="background2 radius10" style={{ padding: "2px 10px", marginTop: "10px" }}>{design.placement}</div>

        <div className="flexbox-row" style={{ margin: "8px" }}>

          <div className="flexbox-row">
            <div className="flexbox-end">
              <h4>width:</h4>
              <h4>height:</h4>
            </div>

            <div className="flexbox-start" style={{ marginLeft: "10px" }}>

              <div className="flexbox-row">
                <div>{width}</div>
                <div style={{ marginLeft: "5px"}}>in.</div>
              </div>

              <div className="flexbox-row">
                <div>{height}</div>
                <div style={{ marginLeft: "5px"}}>in.</div>
              </div>
            </div>

          </div>

          <div className="flexbox-row" style={{ marginLeft: "15px"}}>
            <div className="flexbox-end">
              <h4>X:</h4>
              <h4>Y:</h4>
            </div>

            <div className="flexbox-start" style={{ marginLeft: "10px" }}>
              <div className="flexbox-row">
                <div>{x_offset}</div>
                <div style={{ marginLeft: "5px"}}>mm</div>
              </div>

              <div className="flexbox-row">
                <div>{y_offset}</div>
                <div style={{ marginLeft: "5px"}}>mm</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default PlacementBox;