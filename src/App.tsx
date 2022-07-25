import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import DesignPage from "./pages/DesignPage";
import NoPage from "./pages/NoPage";

import './App.css';

export default function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FF9B54",
      },
      secondary: {
        main: "#FFFFFF"
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="production" element={<ProductsPage />} />
            <Route path="design" element={<DesignPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}