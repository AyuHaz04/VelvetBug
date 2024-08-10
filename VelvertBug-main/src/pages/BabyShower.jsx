import "./pagestyles.css";
import React, { useContext } from "react";
import { StoreContext } from "../assets/Components/Context/StoreContext";
import { Link } from "react-router-dom";

export default function BabyShower() {
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
      <h2 className="pageHead">BabyShower Cards</h2>
      <div className="card-display-list">
        {greeting_list.map((item) => {
          if (item.category == "BabyShower") {
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
}
