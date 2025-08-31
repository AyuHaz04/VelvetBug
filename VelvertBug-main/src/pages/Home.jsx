import React, { useContext } from 'react';
import { StoreContext } from '../assets/Components/Context/StoreContext';
import "./pagestyles.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    const { home_list, url } = useContext(StoreContext);
    const imgStyle3 = {
        width: '100%',
        height: '400px',
        borderRadius: '10px',
        objectFit: 'contain',
        boxShadow: '0 4px 16px rgba(0,0,0,0.12)'
    };
    const preventDownload = (e) => {
        e.preventDefault();
    };

    // Slider settings for react-slick
    const settingsTop = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        arrows: true,
        lazyLoad: 'ondemand',
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    };
    const settingsBottom = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        arrows: true,
        lazyLoad: 'ondemand',
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    };
    // ...existing code...

    return (
        <>
            <div className="scroll-container">
                <Slider {...settingsTop}>
                    {home_list.filter(item => item.category === "Top").map((item) => (
                        <div key={item.image}>
                            <img src={url + "/images/" + item.image} alt="" style={imgStyle3} loading="lazy" />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="para" id="para1">
                <img src="./images/quote.png" alt="" className='quote'/>
            </div>

            
        <div className="icon-container">
            <img src="./images/imgbelowquote.png" className="quote-img" style={{ width: '30vh', height: '15vh', borderRadius: '10px', margin: '1vh' }} />
            </div>


            <div className="categories-name">
                <ul className="options">
                    <Link to="/Wedding" className="option-list"><li>Wedding</li></Link>
                    <Link to="/Anniversary" className="option-list"><li>Anniversary</li></Link>
                    <Link to="/BabyName" className="option-list"><li>Baby Name</li></Link>
                    <Link to="/BabyShower" className="option-list"><li>Baby Shower</li></Link>
                    <Link to="/Birthday" className="option-list"><li>Birthday</li></Link>
                    <Link to="/Dhoti" className="option-list"><li>Dhoti</li></Link>
                    <Link to="/HalfSaree" className="option-list"><li>Half Saree</li></Link>
                    <Link to="/Housewarming" className="option-list"><li>Housewarming</li></Link>
                    <Link to="/Lovestory" className="option-list"><li>Love Story</li></Link>
                    <Link to="/Roka" className="option-list"><li>Roka</li></Link>
                    <Link to="/SaveTheDate" className="option-list"><li>Save The Date</li></Link>
                </ul>
            </div>
            
           
            
            <div className="scroll-container">
                <Slider {...settingsBottom}>
                    {home_list.filter(item => item.category === "Bottom").map((item) => (
                        <div key={item.image}>
                            <img src={url + "/images/" + item.image} alt="" style={imgStyle3} loading="lazy" />
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="midpic">
                <img src="./images/design1.png" alt="Left Decorative" className="side-image left-image" style={{ width: '20vh', height: '25vh', borderRadius: '10px', margin: '1vh' }} />
                <h1   className='review'>Reviews</h1>
                <img src="./images/design1.png" alt="Left Decorative" className="side-image left-image" style={{ width: '20vh', height: '25vh', borderRadius: '10px', margin: '1vh' }} />
            </div>
           

            <div className="bottom-images">
                <div className="review-box">
                    <div className="elfsight-app-a8680cb6-cbe9-4c4d-a377-8dd06303dae1" data-elfsight-app-lazy></div>
                </div>
            </div>
        </>
    );
}
