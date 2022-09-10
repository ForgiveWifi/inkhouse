
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grow from '@mui/material/Grow';
import LogButton from '../ui/buttons/LogButton';
import OrderForm from '../forms/OrderForm';
import CloseButton from '../ui/buttons/CloseButton';

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

export default function FormModal() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div style={{ marginTop: "10px"}}>
        <LogButton name="Contact" onClick={handleOpen} />
      </div>
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
                <CloseButton handleClose={handleClose} />
                <OrderForm />
              </div>
            </Box>
          </div>
        </Grow>
      </Modal>
    </>
  );
}