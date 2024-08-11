import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../assets/Components/Context/StoreContext';
import "./pagestyles.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
    const { home_list, url } = useContext(StoreContext);

    const imgStyle = {
        width: '80vh',
        height: '100vh',
        borderRadius: '10px',
        margin: '1vh',
    };
    const imgStyle3 = {
        width: '80vh',
        height: 'auto',
        borderRadius: '10px',
        margin: '1vh',
    };

    const imgStyle2 = {
        width: '25vh',
        height: '30vh',
        borderRadius: '10px',
        margin: '1vh',
    };

    const icon1 = {
        width: '30vh',
        height: '15vh',
        borderRadius: '10px',
        margin: '1vh',
    };

    const scrollRight = (containerId) => {
        const container = document.getElementById(containerId);
        container.scrollBy({ left: 40, behavior: 'smooth' });

        // Loop the scroll
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
        }
    };

    useEffect(() => {
        const scrollInterval1 = setInterval(() => {
            scrollRight('img-container-1');
        }, 10); // Adjust the time in milliseconds for the speed of scrolling

        const scrollInterval2 = setInterval(() => {
            scrollRight('img-container-2');
        }, 10); // Adjust the time in milliseconds for the speed of scrolling

        return () => {
            clearInterval(scrollInterval1);
            clearInterval(scrollInterval2);
        };
    }, []);

    return (
        <>
            <div className="scroll-container">
                <div id="img-container-1" className="img-container">
                    {home_list.map((item) => {
                        if (item.category === "Top") {
                            return (
                                <img src={url + "/images/" + item.image} alt="" style={imgStyle3} key={item.image} />
                            );
                        }
                    })}
                </div>
                <FaArrowRight className="scroll-arrow" onClick={() => scrollRight('img-container-1')} />
            </div>

            <div className="para" id="para1">
                <p className='Quote'>
                    " With each invite, we weave moments into memories "
                </p>
            </div>

            
            <div class="icon-container">
                  <img src="./images/imgbelowquote.png" className="quote-img" style={icon1} />
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
            
            <div className="midpic">
                <img src="./images/design1.png" alt="Left Decorative" className="side-image left-image" style={imgStyle2} />
                <img src="./images/design1.png" alt="Left Decorative" className="side-image left-image" style={imgStyle2} />
            </div>
            
            <div className="scroll-container">
                <div id="img-container-2" className="img-container">
                    {home_list.map((item) => {
                        if (item.category === "Bottom") {
                            return (
                                <img src={url + "/images/" + item.image} alt="" style={imgStyle} key={item.image} />
                            );
                        }
                    })}
                </div>
                <FaArrowRight className="scroll-arrow" onClick={() => scrollRight('img-container-2')} />
            </div>

            <h1 className='review'>Reviews</h1>

            <div className="bottom-images">
                <div className="review-box">
                    <div className="elfsight-app-a8680cb6-cbe9-4c4d-a377-8dd06303dae1" data-elfsight-app-lazy></div>
                </div>
            </div>
        </>
    );
}
