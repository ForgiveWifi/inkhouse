import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Production from "./pages/home/Production";
import Design from "./pages/home/Design";
import Invoices from "./pages/Invoices"
import SingleInvoice from "./pages/SingleInvoice"
import NewInvoice from "./pages/NewInvoice";
import Products from "./pages/designs/Products"
import NewProduct from "./pages/NewProduct";
import SingleProduct from "./pages/SingleProduct";
import Account from "./pages/Account";
import NewAccount from "./pages/accounts/NewAccount";
import NoPage from "./pages/NoPage";

import './App.css';
import "./Mantine.css"
import ProtectedRoute from "./auth/ProtectedRoute";
import Profile from "./pages/Profile";
import Tags from "./pages/Tags";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="production" element={<Production />} />
            <Route path="design" element={<Design />} />
            <Route path="account" element={<ProtectedRoute component={Account} />} >
              <Route path="profile" element={<Profile />} />
              <Route path="invoices" element={<Invoices />} />
              <Route path="invoices/:invoice_id" element={<SingleInvoice />} />
              <Route path="invoices/new" element={<NewInvoice />} />
              <Route path="products" element={<Products/>} />
              <Route path="products/:product_id" element={<SingleProduct/>} />
              <Route path="product/new" element={<NewProduct/>} />
              <Route path="tags" element={<Tags/>} />
            </Route>

            {/* <Route path="orders" element={<Orders />} /> */}
            {/* <Route path="order/:order_id" element={<SingleInvoice />} /> */}
            
            {/* <Route path="design/:design_id" element={<SingleDesign />} /> */}
            {/* <Route path="accounts" element={<Accounts />} /> */}
            {/* <Route path="account/new" element={<NewAccount />} /> */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}