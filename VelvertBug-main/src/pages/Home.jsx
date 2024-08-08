import React, { useContext } from 'react';
import { StoreContext } from '../assets/Components/Context/StoreContext';
import "./pagestyles.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
    const {greeting_list, url} = useContext(StoreContext);
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

    const scrollRight = () => {
        document.getElementById('img-container').scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (
        <>
            <div className="scroll-container">
            
                <div id="img-container" className="img-container">
                {greeting_list.map((item) => { if(item.category == "Top"){
                    // <img src="./images/2ndr2.jpg" alt="" style={imgStyle3} />
                    // <img src="./images/2ndr3.jpg" alt="" style={imgStyle3} />
                    // <img src="./images/2ndr4.jpg" alt="" style={imgStyle3} />
                    return (
                        <img src={url + "/images/" + item.image} alt="" style={imgStyle3}/>
                    );
                    
                }
          
                })}
                    
                   
                </div>
                
                <FaArrowRight className="scroll-arrow" onClick={scrollRight} />
            </div>

            <div className="para" id="para1">
                <p>
                    Discover the future of invitations with our stunning digital cards! Elevate your events with eco-friendly, customizable designs featuring animations and interactive elements. Instantly shareable across all platforms, our digital invites are perfect for making a memorable impression. Explore our diverse collection and create a unique, unforgettable experience for your guests today!
                </p>
                <p>
                    Here are the Different occasions for you to choose your cards for:
                </p>
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

            <img src="./images/design1.png" alt="Left Decorative" className="side-image left-image" style={imgStyle2}/>
            <img src="./images/design1.png" alt="Right Decorative" className="side-image right-image" style={imgStyle2}/>

            <div className="scroll-container">
                <div id="img-container" className="img-container">
                    {/* <img src="./images/2ndr1.jpg" alt="" style={imgStyle} />
                    <img src="./images/img1.jpg" alt="" style={imgStyle} />
                    <img src="./images/img2.jpg" alt="" style={imgStyle} />
                    <img src="./images/img3.jpg" alt="" style={imgStyle} />
                    <img src="./images/img4.jpg" alt="" style={imgStyle} /> */}
                    {greeting_list.map((item) => { if(item.category == "Bottom"){
                    return (
                        <img src={url + "/images/" + item.image} alt="" style={imgStyle3}/>
                    );
                }
          
                })}
                   
                   
                </div>
                <FaArrowRight className="scroll-arrow" onClick={scrollRight} />
            </div>

          
            <div className="bottom-images">
                {/* <img src="./images/design1.png" alt="Left Decorative" className="side-image left-image" style={imgStyle2}/> */}
                {/* <img src="./images/design1.png" alt="Right Decorative" className="side-image right-image" style={imgStyle2}/> */}
                <div className="review-box">
                <div className="elfsight-app-a8680cb6-cbe9-4c4d-a377-8dd06303dae1" data-elfsight-app-lazy></div>
                </div>
                
                
            </div>
        </>
    );
}
