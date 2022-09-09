import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function SelectedColor({color, garment, setGarment}) {

  function select() {
    setGarment({...garment, color})
  }
  return (
    <>
      <div style={{ margin: "5px"}}>
        <button onClick={select} className="flexbox radius10" style={{ border:"2px solid #dedede", backgroundColor: color, width: "40px", height: "40px"}}>
          <CheckCircleOutlineIcon sx={{ fill: "#dedede"}} /> 
        </button>
      </div>
    </>
  );
}

export default SelectedColor;