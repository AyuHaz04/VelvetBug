import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import React, { useContext } from 'react'
import { StoreContext } from '../assets/Components/Context/StoreContext'
import "./pagestyles.css";


export default function Home() {
    const {greeting_list,url} = useContext(StoreContext);
    const imgStyle = {
      width: '100%' ,
      height: '600px',
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
        <li className="option-list">Wedding </li>
        <li className="option-list">Anniversary</li>
        <li className="option-list">BabyName </li>
        <li className="option-list">BabyShower</li>
        <li className="option-list">Birthday</li>
        <li className="option-list">Dhoti</li>
        <li className="option-list">HalfSaree </li>
        <li className="option-list">Housewarming </li>
        <li className="option-list">Lovestory</li>
        <li className="option-list">Roka </li>
        <li className="option-list">SaveTheDate</li>
      </ul>
    </div>
      
      <div className="card-display-list">
        {greeting_list.map((item) => {
            return (
                <div>
                    <div className="item">{item._id}</div>
                    <div className="image">
                        <img src={url+"/images/"+item.image} alt="" />
                    </div>
                    <div className="name">{item.name}</div>
                    <div className="description">{item.font}</div>
                    <div className="price">{item.price}</div>

                </div>

            );
        })}
      </div>
    </>
  );
}
