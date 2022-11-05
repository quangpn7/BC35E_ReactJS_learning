import React from "react";
import ReactDOM from "react-dom/client";
import BaiTapHomeLayout from "./components/BaiTapHomeLayout/BaiTapHomeLayout";
import Header from "./components/Header";
import Product from "./components/Product";
import DataBinding from "./DataBinding/DataBinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import DemoState from "./State/DemoState";
import RenderList from "./RenderList/RenderList";
import ExRenderFilm from "./RenderList/ExRenderFilm";
import ShoesApp from "./Props/ShoeApp/ShoesApp";
import DemoProps from "./Props/DemoProps/DemoProps";
import BaiTapXemChiTiet from "./State/BaiTapXemChiTiet/BaiTapXemChiTiet";
import ExerciseCarStore from "./Props/ExcersiceCarStore/ExerciseCarStore";
import DemoChildrenProps from "./Props/DemoChildrenProps/DemoChildrenProps";

//nhúng css
import "./assets/css/style.css";
//setup react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import HomeTemplate from "./templates/HomeTemplate";
import BaiTapGioHang from "./pages/BaiTapGioHang/BaiTapGioHang";

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="btgiohang" element={<BaiTapGioHang />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
