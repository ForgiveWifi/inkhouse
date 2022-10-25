import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Production from "./pages/home/Production";
import Design from "./pages/home/Design";
import Orders from "./pages/orders/Orders"
import SingleOrder from "./pages/orders/SingleOrder"
import NewOrder from "./pages/orders/NewOrder";
import Products from "./pages/designs/Products"
import NewProduct from "./pages/NewProduct";
import SingleDesign from "./pages/designs/SingleDesign";
import Accounts from "./pages/accounts/Accounts";
import NewAccount from "./pages/accounts/NewAccount";
import NoPage from "./pages/NoPage";

import './App.css';
import "./Mantine.css"
import ProtectedRoute from "./auth/ProtectedRoute";
import Profile from "./pages/Profile";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="production" element={<Production />} />
            <Route path="design" element={<Design />} />
            <Route path="profile" element={<ProtectedRoute component={Profile} />} >
              <Route path="orders" element={<Orders />} />
              <Route path="order/new" element={<NewOrder />} />
              <Route path="products" element={<ProtectedRoute component={Products}/>} />
              <Route path="product/new" element={<ProtectedRoute component={NewProduct}/>} />
            </Route>

            {/* <Route path="orders" element={<Orders />} /> */}
            {/* <Route path="order/new" element={<NewOrder />} /> */}
            {/* <Route path="order/:order_id" element={<SingleOrder />} /> */}
            
            {/* <Route path="design/:design_id" element={<SingleDesign />} /> */}
            {/* <Route path="accounts" element={<Accounts />} /> */}
            {/* <Route path="account/new" element={<NewAccount />} /> */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}