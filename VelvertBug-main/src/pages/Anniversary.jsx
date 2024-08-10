<<<<<<< HEAD
import React, { useContext } from "react";
import { StoreContext } from "../assets/Components/Context/StoreContext";
=======
import React, { useContext, useState } from 'react';
import { StoreContext } from '../assets/Components/Context/StoreContext';
>>>>>>> a4491718516aca99479a6596b48ee2283c4c0a70
import { Link } from "react-router-dom";
import "./pagestyles.css";

export default function Anniversary() {
<<<<<<< HEAD
  const { greeting_list, url, setImage, setImage1 } = useContext(StoreContext);

  const updateImage = (image, image1) => {
    setImage(image);
    setImage1(image1);
  };

  const imgStyle2 = {
    width: "30rem",
    height: "50rem",
    borderRadius: "10px",
    margin: "10px",
  };
  return (
    <>
      <h2 className="pageHead">Anniversary cards</h2>

      <div className="card-display-list">
        {greeting_list.map((item) => {
          if (item.category == "Anniversary") {
            return (
              <div>
                <div className="image">
                  <Link to="/CardEdit">
                    <img
                      onClick={() => updateImage(item.image, item.image1)}
                      src={url + "/images/" + item.image}
                      alt=""
                      style={imgStyle2}
                    />
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
=======
    const { greeting_list, url, setImage } = useContext(StoreContext);
    const [filter, setFilter] = useState(''); // State to track the selected filter

    const updateImage = (image) => {
        setImage(image);
    }

    const imgStyle2 = {
        width: '30rem',
        height: '50rem',
        borderRadius: '10px',
        margin: '10px',
    };

    // Function to filter the greeting_list based on price
    const filterByPrice = (item) => {
        if (!filter) return true; // No filter selected
        const price = item.price; // Assuming 'price' is a field in the item object
        if (filter === '299-399' && price >= 299 && price <= 399) return true;
        if (filter === '1999-4999' && price >= 1999 && price <= 4999) return true;
        if (filter === '5999-9999' && price >= 5999 && price <= 9999) return true;
        return false;
    };

    return (
        <>
            <h2 className='pageHead'>Anniversary Cards</h2>

            <div className="filters">
                <button onClick={() => setFilter('299-399')}>299-399 /n</button>
                <button onClick={() => setFilter('1999-4999')}>1999-4999</button>
                <button onClick={() => setFilter('5999-9999')}>5999-9999</button>
                <button onClick={() => setFilter('')}>Clear Filters</button>
            </div>

            <div className="card-display-list">
                {greeting_list.filter(item => item.category === "Anniversary" && filterByPrice(item)).map((item) => {
                    return (
                        <div key={item.image}>
                            <div className="image">
                                <Link to="/CardEdit">
                                    <img onClick={() => updateImage(item.image)} src={url + "/images/" + item.image} alt="" style={imgStyle2} />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
>>>>>>> a4491718516aca99479a6596b48ee2283c4c0a70
}
