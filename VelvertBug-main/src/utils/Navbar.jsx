import "./Navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="Header">
        <h1>TheVelvetbug</h1>
        <div className="Navbar">
        <a href="#about-me" className="AboutMeLink">About Me</a>
          <div className="CategoryMenu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faList} className="Icon" />
          </div>
          
          {isOpen && (
            <div className="DropdownMenu">
              <a href="#category1">Category 1</a>
              <a href="#category2">Category 2</a>
              <a href="#category3">Category 3</a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
