import React, { useContext, useState } from "react";
import { StoreContext } from "../assets/Components/Context/StoreContext";
import { Link } from "react-router-dom";
import "./pagestyles.css";

export default function Anniversary() {
  const { greeting_list, url, setImage, setImage1, setDescription } =
    useContext(StoreContext);
  const [filter, setFilter] = useState(""); // State to track the selected filter

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

  // Function to filter the greeting_list based on price
  const filterByPrice = (item) => {
    if (!filter) return true; // No filter selected
    const price = item.price; // Assuming 'price' is a field in the item object
    if (filter === "299-399" && price >= 299 && price <= 399) return true;
    if (filter === "1999-4999" && price >= 1999 && price <= 4999) return true;
    if (filter === "5999-9999" && price >= 5999 && price <= 9999) return true;
    return false;
  };

  return (
    <>
      <h2 className="pageHead">Anniversary Cards</h2>

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
              (item) => item.category === "Anniversary" && filterByPrice(item)
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
