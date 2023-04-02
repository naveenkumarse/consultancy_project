import React from "react";
// import '../scss/_categorycarousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import CategoryBanner from "./categorybanner";


const BestOf =
    [
        {
            ImgSrc:
                "https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
            CategoryName: "Top Mirrorless Cameras",
            Brand: "Canon,Sony",
        },
        {
            ImgSrc:
                "https://rukminim1.flixcart.com/image/200/200/l1pc3gw0/power-bank/e/u/y/-original-imagd7dzan7sakt2.jpeg?q=70",
            CategoryName: "Premium PowerBanks",
            Brand: "Mi & Realme",
        },
        {
            ImgSrc:
                "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
            CategoryName: "Printers",
            Brand: "HP",
        },
        {
            ImgSrc:
                "https://rukminim1.flixcart.com/image/200/200/ks7tuvk0/gimbal/v/z/7/0-43-om4-se-dji-original-imag5u6rgsdh6k4g.jpeg?q=70",
            CategoryName: "Top Deals of Camera Accessories",
            Brand: "Tripods,Gimbals,Bags",
        },
        {
            ImgSrc:
                "https://rukminim1.flixcart.com/image/200/200/xif0q/monitor/9/b/n/va249he-23-8-inch-eye-care-fhd-full-hd-23-8-90lm02w1-b01310-asus-original-imaghfhmyvwz9x53.jpeg?q=70",
            CategoryName: "Asus Monitors",
            Brand: "Top Rated",
        },
        {
            ImgSrc:
                "https://rukminim1.flixcart.com/image/200/200/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70",
            CategoryName: "Best of Hair Dryers",
            Brand: "Philips,Nova,Havells & more",
        },
        {
            ImgSrc:
                "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
            CategoryName: "Moniters",
            Brand: "Dell",
        },
    ];
const Next = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <MdArrowForwardIos
                style={{ color: "black", fontSize: 25, fontWeight: 900 }}
            />
        </div>
    );
};
const Prev = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <MdOutlineArrowBackIosNew
                style={{ color: "black", fontSize: 25, fontWeight: 900 }}
            />
        </div>
    );
};

const CategoryCarousel = ({ BgImg, Title }) => {
    const Settings = {
        dots: false,
        speed: 500,
        slidesToShow: 4,
        // slidesToScroll:4,
        infinite: false,
    };

    return (
        <div className="CategoryCarousel">
            <div
                className="CategoryCarousel-left"
                style={{ background: `url(${BgImg}) no-repeat 0px bottom` }}>
                <p className="CategoryCarousel-title">{Title}</p>
                <button className="CategoryCarousel-btn">View All</button>
            </div>
            <div className="CategoryCarousel-right">
                <Slider nextArrow={<Next />} prevArrow={<Prev />} {...Settings}>
                    {BestOf.map((item, index) => (
                        <Link key={index} to={"id"}>
                            <CategoryBanner
                                ImgSrc={item.ImgSrc}
                                Title={item.CategoryName}
                                Brand={item.Brand}
                            />
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CategoryCarousel;
