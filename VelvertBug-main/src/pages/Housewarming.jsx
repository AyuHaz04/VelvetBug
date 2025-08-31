import "./pagestyles.css";
import React, { useContext } from "react";
import { StoreContext } from "../assets/Components/Context/StoreContext";
import { Link } from "react-router-dom";

export default function Housewarming() {
  const { greeting_list, url, setImage, setImage1, setDescription } =
    useContext(StoreContext);

  const updateImage = (image, image1, description) => {
    setImage(image);
    setImage1(image1);
    setDescription(description);
  };

  const imgStyle2 = {
    width: "25rem",
    height: "37rem",
    borderRadius: "10px",
    margin: "10px",
  };

  // Function to prevent right-click download
  const preventDownload = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2 className="pageHead">Housewarming Ceremony Cards</h2>
      <div className="filter-container">
        <div className="filters">
          <p>
            <i class="fa-solid fa-filter"></i> Filter
          </p>
          <button className="filter-btn" onClick={() => setFilter("299-399")}>
            299-399
          </button>
          <button className="filter-btn" onClick={() => setFilter("1999-4999")}>
            1999-4999
          </button>
          <button className="filter-btn" onClick={() => setFilter("5999-9999")}>
            5999-9999
          </button>
          <button className="filter-btn" onClick={() => setFilter("")}>
            Clear Filters
          </button>
        </div>

        <div className="card-display-list">
          {greeting_list
            .filter(
              (item) => item.category === "Housewarming" && filterByPrice(item)
            )
            .map((item) => {
              return (
                <div key={item.image}>
                  <div className="image">
                    <Link to="/CardShow">
                      <img
                        onClick={() =>
                          updateImage(item.image, item.image1, item.description)
                        }
                        src={url + "/images/" + item.image}
                        alt=""
                        style={imgStyle2}
                      />
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
