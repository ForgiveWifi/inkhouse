
function ColorPalette({color, attributes, setAttributes}) {

  function select() {
    setAttributes({...attributes, color})
  }
  return (
    <>
      <div style={{ margin: "5px"}}>
        <button onClick={select} className="flexbox radius10" style={{ backgroundColor: color, width: "40px", height: "40px", border: "none"}}>
        </button>
      </div>
    </>
  );
}

export default ColorPalette;