import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { cleanNotifications } from "@mantine/notifications";

export default function BackButton({maxWidth}) {

  const navigate = useNavigate();

  function goBack() {
    cleanNotifications()
    navigate(-1)
  }
  
  return(
    <>
      <div style={{ position: "absolute", top: 20, left: 20}}>
        <IconButton onClick={goBack}>
          <ArrowBackIcon sx={{ fontSize: "30px" }} />
        </IconButton>
      </div>
    </>
  )
}