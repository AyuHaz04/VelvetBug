import "./pagestyles.css";
import React, { useContext } from 'react'
import { StoreContext } from '../assets/Components/Context/StoreContext'
import { Link } from "react-router-dom";

export default function Birthday() {
    const {greeting_list,url,setImage} = useContext(StoreContext);

    const updateImage = (image) => {
      setImage(image);
    }
    
    const imgStyle2 = {
      width: '30rem' ,
      height: '50rem',
      borderRadius: '10px',
      margin: '10px',
      
    }
  return (
    <>
      <h2>Birthday Cards</h2>
      <div className="card-display-list">
        {greeting_list.map((item) => { if(item.category == "Birthday"){
          return (
            <div>
              
              <div className="image">
                <Link to="/CardEdit">
                <img onClick={() => updateImage(item.image)} src={url + "/images/" + item.image} alt="" style={imgStyle2}/>
                </Link>
              </div>
              
            </div>
          );
        }
          
        })}
      </div>
    </>
  );
}
