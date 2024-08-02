
import React, { useContext } from 'react'
import { StoreContext } from '../assets/Components/Context/StoreContext'
import "./pagestyles.css";
import { Link } from "react-router-dom";


export default function Home() {
    const {greeting_list,url} = useContext(StoreContext);
    const imgStyle = {
      width: '97%' ,
      height: '600px',
      borderRadius: '10px',
      margin: '3vh',
      
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
      <p>
      Here are the Different occassions for you to choose your cards for
      </p>
    </div>

    <div className="dancing-script-categories-name">
      <ul className="options">
        <Link to="/Wedding" className="option-list"><li ><p>Wedding </p></li></Link>
        <Link to="/Anniversary" className="option-list"><li >Anniversary</li></Link>
        <Link to="/BabyName" className="option-list"><li >BabyName </li></Link>
        <Link to="/BabyShower" className="option-list"><li>BabyShower</li></Link>
        <Link to="/Birthday" className="option-list"><li>Birthday</li></Link>
        <Link to="/Dhoti" className="option-list"><li>Dhoti</li></Link>
        <Link to="/HalfSaree" className="option-list"><li>HalfSaree </li></Link>
        <Link to="/Housewarming" className="option-list"><li>Housewarming </li></Link>
        <Link to="/Lovestory" className="option-list"><li>Lovestory</li></Link>
        <Link to="/Roka" className="option-list"><li>Roka </li></Link>
        <Link to="/SaveTheDate" className="option-list"><li>SaveTheDate</li></Link>
      </ul>
    </div>
      
    
    </>
  );
}
