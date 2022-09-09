
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

function CloseButton({handleClose}) {
  return (
    <>
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <IconButton onClick={handleClose}>
          <CloseIcon style={{ fill: "#FF9B54" }} sx={{ fontSize: "30px" }} />
        </IconButton>
      </div>
    </>
  );
}

export default CloseButton;