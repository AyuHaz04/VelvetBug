
import React, { useContext } from 'react'
import { StoreContext } from '../assets/Components/Context/StoreContext'
import "./pagestyles.css";
import { Link } from "react-router-dom";


export default function Home() {
    const {greeting_list,url} = useContext(StoreContext);
    const imgStyle = {
      width: '100%' ,
      height: '600px',
      borderRadius: '10px',
      margin: '10px',
      
    }
    const imgStyle2 = {
      width: '30rem' ,
      height: '50rem',
      borderRadius: '10px',
      margin: '10px',
      
    }
  return (
    <>
    <div>
    <img src="./images/img5.jpg" alt=""  style={imgStyle}/>
    </div>

    <div className="para" id="para1">
      <p>
      Discover the future of invitations with our stunning digital cards! Elevate your events with eco-friendly, customizable designs featuring animations and interactive elements. Instantly shareable across all platforms, our digital invites are perfect for making a memorable impression. Explore our diverse collection and create a unique, unforgettable experience for your guests today!
      </p>
    </div>

    <div className="dancing-script-categories-name">
      <ul className="options">
        <Link to="/Wedding"><li className="option-list">Wedding </li></Link>
        <Link to="/Anniversary"><li className="option-list">Anniversary</li></Link>
        <Link to="/BabyName"><li className="option-list">BabyName </li></Link>
        <Link to="/BabyShower"><li className="option-list">BabyShower</li></Link>
        <Link to="/Birthday"><li className="option-list">Birthday</li></Link>
        <Link to="/Dhoti"><li className="option-list">Dhoti</li></Link>
        <Link to="/HalfSaree"><li className="option-list">HalfSaree </li></Link>
        <Link to="/Housewarming"><li className="option-list">Housewarming </li></Link>
        <Link to="/Lovestory"><li className="option-list">Lovestory</li></Link>
        <Link to="/Roka"><li className="option-list">Roka </li></Link>
        <Link to="/SaveTheDate"><li className="option-list">SaveTheDate</li></Link>
      </ul>
    </div>
      
      <div className="card-display-list">
        {greeting_list.map((item) => {
            return (
                <div>
                   
                    <div className="image">
                        <img src={url+"/images/"+item.image} alt="" style={imgStyle2}/>
                    </div>
                    

                </div>

            );
        })}
      </div>
    </>
  );
}
