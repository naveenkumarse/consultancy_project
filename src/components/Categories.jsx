import React from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import category1 from "../assets/category1.png";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";
import category5 from "../assets/category5.png";
import category6 from "../assets/category6.png";
import Categorypage from "../pages/category_page";


function Categories() {
    const categories = [
        {
            image: category1,
            name: 'category1',
            path: './card',
            title: "Cards",
            description: "290K Items",
        },
        {
            image: category2,
            name: 'category2',
            path: './paper',
            title: "Paper",
            description: "3M Items",
        },
        {
            image: category3,
            name: 'category3',
            path: './sticker',
            title: "Sticker",
            description: "1.2M Items",
        },
        {
            image: category4,
            name: 'category4',
            path: './cover',
            title: "Cover",
            description: "751K Items",
        },
        {
            image: category5,
            name: 'category5',
            path: './bondsheet',
            title: "Bond Sheet",
            description: "1.0M Items",
        },
        {
            image: category6,
            name: 'category6',
            path: './flex',
            title: "Flex",
            description: "88K Items",
        },
    ];
    const myroute = categories.map(({path},index)=>{
<Routes>
        <Route key={index} path={path} element={<Categorypage/>}/>
</Routes>
    })
    const links = categories.map(({ image,name,title,description, path },index) => (
        <Link style={{ textDecoration:"none"}} key={name} to={path}>
           <div className="category" key={index}>
                <img src={image} alt="Category" className="cimg" />
                <h4 >{title}</h4>
                <p>{description}</p>
              </div>
        </Link>
      ));
    return (    
        <div className="categories-container mx-3 py-3">
            <div className="container">
                <div className="title-container">
                    <h2>Categories</h2>
                </div>
                <div style={{textDecoration:"none"}} className="categories">             
              {links}       
                </div>
                <button>Show All</button>
            </div>
        </div>
    );
}

export default Categories;