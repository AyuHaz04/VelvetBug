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
                    return (
                        <img src={url + "/images/" + item.image} alt="" style={imgStyle3}/>
                    );
                    
                }
          
                })}
                    
                   
                </div>
                
                <FaArrowRight className="scroll-arrow" onClick={scrollRight} />
            </div>

            <div className="para" id="para1">
                <p className='Quote'>
                    "  With each invite, we weave moments into memories  "
                </p>
            </div>

            <div className="categories-name">
               
            </div>

            <img src="./images/design1.png" alt="Left Decorative" className="side-image left-image" style={imgStyle2}/>
            <img src="./images/design1.png" alt="Right Decorative" className="side-image right-image" style={imgStyle2}/>

            <div className="scroll-container">
                <div id="img-container" className="img-container">
                    {greeting_list.map((item) => { if(item.category == "Bottom"){
                    return (
                        <img src={url + "/images/" + item.image} alt="" style={imgStyle}/>
                    );
                }
          
                })}
                   
                   
                </div>
                <FaArrowRight className="scroll-arrow" onClick={scrollRight} />
            </div>

          
            <div className="bottom-images">
               
                <div className="review-box">
                <div className="elfsight-app-a8680cb6-cbe9-4c4d-a377-8dd06303dae1" data-elfsight-app-lazy></div>
                </div>
                
                
            </div>
        </>
    );
}
