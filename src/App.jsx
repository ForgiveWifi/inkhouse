import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Production from "./pages/home/Production";
import ArtDesign from "./pages/home/ArtDesign";
import Orders from "./pages/orders/Orders"
import SingleOrder from "./pages/orders/SingleOrder"
import NewOrder from "./pages/orders/NewOrder";
import Designs from "./pages/designs/Designs"
import NewProduct from "./pages/NewProduct";
import SingleDesign from "./pages/designs/SingleDesign";
import Accounts from "./pages/accounts/Accounts";
import NewAccount from "./pages/accounts/NewAccount";
import NoPage from "./pages/NoPage";

import './App.css';
import "./Mantine.css"

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="production" element={<Production />} />
            <Route path="art&design" element={<ArtDesign />} />
            <Route path="orders" element={<Orders />} />
            <Route path="order/new" element={<NewOrder />} />
            <Route path="order/:order_id" element={<SingleOrder />} />
            <Route path="designs" element={<Designs />} />
            <Route path="design/new" element={<NewProduct />} />
            <Route path="design/:design_id" element={<SingleDesign />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="account/new" element={<NewAccount />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}