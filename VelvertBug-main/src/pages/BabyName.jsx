import "./pagestyles.css";
import React, { useContext } from 'react'
import { StoreContext } from '../assets/Components/Context/StoreContext'
import { Link } from "react-router-dom";

export default function BabyName() {
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
      <h2 className='pageHead'>BabyName Cards</h2>

      
      <div className="filters">
                <button onClick={() => setFilter('299-399')}>299-399 /n</button>
                <button onClick={() => setFilter('1999-4999')}>1999-4999</button>
                <button onClick={() => setFilter('5999-9999')}>5999-9999</button>
                <button onClick={() => setFilter('')}>Clear Filters</button>
            </div>

      <div className="card-display-list">
        {greeting_list.map((item) => { if(item.category == "BabyName"){
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
