import React from "react";
import '../scss/_categorybar.css'
import '../scss/index.scss';
import CategoryBar from "../components/categorybar";
const CategoryBarData = [
  {
    imageSrc:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/178cf5a874cd697a.png?q=100",
    category: "Top Offers",
  },
  {
    imageSrc:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e2268d56d09df684.png?q=100",
    category: "Mobiles & Tablets",
  },
  {
    imageSrc:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6e3e1efa83bc56c3.png?q=100",
    category: "Electronics",
  },
  {
    imageSrc:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/b3e1225e6bda1c9e.png?q=100",
    category: "TVs & Appliances",
  },
  {
    imageSrc:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f09b2d254acb48a.png?q=100",
    category: "Beauty",
  },
  {
    imageSrc:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5972d5da375c81c7.png?q=100",
    category: "Home & Furniture",
  },
  {
    imageSrc:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/1cfc2d91f717510a.png?q=100",
    category: "Flights",
  },
  {
    imageSrc:"https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d154c0b4d536c1cf.png?q=100",
    category: "Grocery",
  },
];

const Categorypage = () => {
  return (
    <div className="Home">
      <div className="Home-CategoryContainer">
        <div className="Home-CategoryBar">
          {CategoryBarData.map((item, index) => (
            <CategoryBar
              key={index}
              Imgsrc={item.imageSrc}
              CategoryName={item.category}
            />
          ))}
        </div>
      </div>
    </div>


  )
}
export default Categorypage;
