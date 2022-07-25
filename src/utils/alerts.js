import { showNotification } from "@mantine/notifications"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorIcon from '@mui/icons-material/Error';

function sucessAlert() {
  showNotification({
    title: 'Success',
    message: 'Thank you! We will contact you shortly.',
    color: "green",
    icon: <CheckCircleOutlineIcon />,
    styles: (theme) => ({
      root: {
        backgroundColor: "#4BB543",
        border: "none",
      },
      title: { color: theme.white },
      description: { color: theme.white },
      closeButton: {
        color: theme.white,
        '&:hover': { backgroundColor: "#47ab3f" },
      },
    }),
  })
}

function errorAlert() {
  showNotification({
    title: 'Error!',
    message: 'Something went wrong!',
    color: "red",
    icon: <ErrorIcon />,
    styles: (theme) => ({
      root: {
        backgroundColor: "#ff3333",
        border: "none",
      },
      title: { color: theme.white },
      description: { color: theme.white },
      closeButton: {
        color: theme.white,
        '&:hover': { backgroundColor: "#fb0000" },
      },
    }),
  })
}

function loadingAlert() {
  showNotification({
    loading: true,
    title: 'Loading...',
    message: 'Please wait',
    color: "white",
    styles: (theme) => ({
      root: {
        backgroundColor: "#FF9B54",
        border: "none",
      },
      title: { color: theme.white },
      description: { color: theme.white },
      closeButton: {
        color: theme.white,
        '&:hover': { backgroundColor: "#fb0000" },
      },
    }),
  })
}

export { sucessAlert, errorAlert, loadingAlert } 