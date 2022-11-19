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
//setup redux store
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
//nhúng css
import "./assets/css/style.css";
//setup react router dom
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import HomeTemplate from "./templates/HomeTemplate";
import BaiTapGioHang from "./pages/BaiTapGioHang/BaiTapGioHang";
import Page404 from "./pages/Page404/Page404";
import FormCreateProduct from "./pages/Form/FormCreateProduct";
import LifeCycle from "./pages/LifeCycle/LifeCycle";
import Store from "./components/StoreAPI/Store";
import Blog from "./components/BlogAPI/Blog";
import QLSV from "./components/BaiTapQLSV/QLSV";
import ReduxDemo from "./pages/ReduxDemo/ReduxDemo";

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplate />}>
            <Route path="home" index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="btgiohang" element={<BaiTapGioHang />} />
            <Route path="form" element={<FormCreateProduct />} />
            <Route path="lifecycle" element={<LifeCycle />} />
            <Route path="store" element={<Store />} />
            <Route path="blog" element={<Blog />} />
            <Route path="qlsv" element={<QLSV />} />
            <Route path="reduxdemo" element={<ReduxDemo />} />
            <Route path="page404" element={<Page404 />} />
            <Route path="*" element={<Navigate to="/page404" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);
