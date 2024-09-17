import "./Navbar.css";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="Header" ref={menuRef}>
        <Link to="/"><img src="./images/logo.png" alt="" className="logo" /></Link>
        <h1 className="HeadText"><Link to="/">TheVelvetbug</Link></h1>
        <div className="Navbar">
          <Link to="/CardCustomize" className="AboutMeLink">
            Customize
          </Link>
          <a href="#about-me" className="AboutMeLink">
            About
          </a>
          <div className="CategoryMenu" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faList} className="Icon" />
          </div>
        </div>
        {isOpen && (
          <div className="DropdownMenu">
            <a href="#category1">Wedding</a>
            <a href="#category2">Anniversary</a>
            <a href="#category3">BabyName</a>
             <a href="">BabyShower</a>
             <a href="">Birthday</a>
             <a href="">Dhoti</a>
             <a href="">HalfSaree</a>
             <a href="">HouseWarming</a>
             <a href="">LoveStory</a>
             <a href="">Roka</a>
             <a href="">SaveThedate</a> 
          </div>
        )}
      </div>
      <hr className="header-line" />
    </>
  );
}
