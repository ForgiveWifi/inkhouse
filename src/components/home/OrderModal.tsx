
import { useState } from 'react';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Grow';
import OrderForm from "./OrderForm"
import ContactButton from '../ui/ContactButton';

const style = {
  margin: "auto",
  marginTop: "5vh",
  bgcolor: 'white',
  color: "red",
  borderRadius: "20px",
  boxShadow: 24,
  maxWidth: "460px",
  position: "relative"
};

export default function OrderModal() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ContactButton onClick={handleOpen} />
      <Modal
        open={open}
        sx={{ backdropFilter: "blur(6px)" }}
        keepMounted={true}
        hideBackdrop={true}
      >
        <Grow in={open}>
          <div style={{ padding: "0px 20px" }}>
            <Box sx={style}>
              <div className='flexbox-column'>

                <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                  <IconButton onClick={handleClose}>
                    <CloseIcon style={{ fill: "#FF9B54" }} sx={{ fontSize: "30px" }} />
                  </IconButton>
                </div>

                <OrderForm />

              </div>
            </Box>
          </div>
        </Grow>
      </Modal>
    </>
  );
}