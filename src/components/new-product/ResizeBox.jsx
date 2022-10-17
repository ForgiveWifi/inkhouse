
function ResizeBox({light}) {
  return (
    <div className="flexbox" style={{ width: 20, height: 20}}>
      <div style={{ width: 10, height: 10, backgroundColor: light ? "white" : "black", border: `2px solid ${light ? "black" : "white"}`}}></div>
    </div>
  );
}

export default ResizeBox;