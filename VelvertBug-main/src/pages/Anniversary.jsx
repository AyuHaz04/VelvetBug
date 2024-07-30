
import React, { useContext } from 'react'
import { StoreContext } from '../assets/Components/Context/StoreContext'
import { Link } from "react-router-dom";
import './pagestyles.css';

export default function Anniversary() {
    const {greeting_list,url} = useContext(StoreContext);
    const imgStyle2 = {
      width: '30rem' ,
      height: '50rem',
      borderRadius: '10px',
      margin: '10px',
      
    }
  return (
    <>
      <h2>Anniversary cards</h2>

      <div className="card-display-list">
        {greeting_list.map((item) => {
          return (
            <div>
              
              <div className="image">
                <Link to="/CardEdit">
                  <img src={url + "/images/" + item.image} alt="" style={imgStyle2}/>
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
