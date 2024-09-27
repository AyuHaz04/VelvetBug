import './CardShow.css';
import React, { useRef, useState, useContext } from 'react';
import { StoreContext } from '../assets/Components/Context/StoreContext';
import { Link } from "react-router-dom";
import {FacebookShareButton,WhatsappShareButton,FacebookIcon,WhatsappIcon} from "react-share";

export default function CardShow(){
    const shareUrl = window.location.href;
    const { url, img, desc} = useContext(StoreContext);
    const imgStyle3 = {
        width: '80vh',
        height: 'auto',
        borderRadius: '10px',
        margin: '1vh',
    };

    return(
        <>
        <div className='CardShow'>
            <h1>Preview</h1>
            <div className="containerPreview">
                <div className="img-container-preview">
                    <img src={url + "/images/" + img} alt="" style={imgStyle3} className='imgplace'/>
                </div>
                <div className="details">
                    <p>Card Size- 5' x 7'</p>
                    <p><i class="fa-regular fa-image"></i>Download Image</p>
                    <p><i class="fa-solid fa-file-pdf"></i>Download Pdf</p>
                    <p><span class="material-symbols-outlined">share</span> Share PDF</p>
                    <div className="share-card">
                        <FacebookShareButton url1={shareUrl}/>
                        <FacebookIcon size={32} round={true}/>
                        <WhatsappShareButton url1={shareUrl}/>
                        <WhatsappIcon size={32} round={true}/>
                    </div>
                    
                </div>
               
            </div>
            <div className="container-2">
            <Link to="/CardEdit"><button>Customize</button></Link>
            <p><i>Description</i></p>
            <p>{desc}</p>
            </div>
        </div>
        </>
    );
}

// export default CardShow;

