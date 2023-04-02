import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Choose from "./components/Choose";
import Home from "./components/Home";
import "./scss/index.scss";
import Services from "./components/Services";
import Categories from "./components/Categories";
import Recommend from "./components/Recommend";
import Products from "./components/Products";
import Promo from "./components/Promo";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import scrollreveal from "scrollreveal";
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Productpage from "./pages/product_page";
import Sign from "./components/sign";
import Categorypage from "./pages/category_page";
import CategoryCarousel from "./components/categorycarousel";
import ProductDetails from "./components/productdetails";


function App() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .services-container,
        .categories-container,
        .recommend-container,
        .choose-us-container,
        .products-container,
        .promo-container,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
  }, 1500);
  return (

    <HashRouter>
      <Routes>
        <Route path="/" element={
          <div data-theme={theme} className="app">
            <ScrollTop />
            <Navbar changeTheme={changeTheme} currentTheme={theme} />
            <Home />
            <Services />
            {/* <Categories /> */}
            <Recommend />
            <Choose />
            <Products />
            <Promo />
            <Footer />
          </div>} />
        <Route path="/products" element={<div data-theme={theme} className="app">

          <Navbar changeTheme={changeTheme} currentTheme={theme} />
          <Categories />
          <Productpage /></div>

        } />
        <Route path="/login" element={<div data-theme={theme} className="app">
          <Navbar changeTheme={changeTheme} currentTheme={theme} />
          <Sign />
        </div>
        } />
        <Route path="/products/card" element={
          <div data-theme={theme} className="app">
            <Navbar changeTheme={changeTheme} currentTheme={theme} />
            <Categorypage />
            <CategoryCarousel  BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Beauty,Food,Toys"} />
          </div>} />
          <Route path="/products/card/id" element={
          <div data-theme={theme} className="app">
            <Navbar changeTheme={changeTheme} currentTheme={theme} />
            <ProductDetails/>
          </div>} />
       
        <Route path="/products/paper" element={<h1>hii</h1>} />
        <Route path="/products/sticker" element={<h1>hii</h1>} />
        <Route path="/products/cover" element={<h1>hii</h1>} />
        <Route path="/products/bondsheet" element={<h1>hii</h1>} />
        <Route path="/products/flex" element={<h1>hii</h1>} />

      </Routes>
    </HashRouter>
  );
}

export default App;
