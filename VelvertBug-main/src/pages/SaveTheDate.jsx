import Navbar from "../utils/Navbar";
import Footer from "../utils/Footer";
import React, { useContext } from 'react'
import { StoreContext } from '../assets/Components/Context/StoreContext'
import { Link } from "react-router-dom";

export default function SaveTheDate() {
    const {greeting_list,url} = useContext(StoreContext);
  return (
    <>
      <div>Hi I am SaveTheDate</div>
      <div className="card-display-list">
        {greeting_list.map((item) => {
          return (
            <div>
              <div className="item">{item._id}</div>
              <div className="image">
                <Link to="/CardEdit">
                  <img src={url + "/images/" + item.image} alt="" />
                </Link>
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
