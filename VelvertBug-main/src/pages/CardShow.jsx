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
            
            <div className="containerPreview">
                <div className="img-container-preview">
                    <div className="overlayDiv"></div>
                    <img src={url + "/images/" + img} alt="" style={imgStyle3} className='imgplace'/>
                </div>
                <div className="details">
                    <div className="details-box">
                        <p>Card Size- 5' x 7'</p>
                        <p><i className="fa-regular fa-image"></i> Download Image</p>
                        <p><i className="fa-solid fa-file-pdf"></i> Download Pdf</p>
                    </div>
                    <div className="share-buttons-icons">
                        {/* <p>Share</p> */}
                        <FacebookShareButton url={shareUrl}>
                            <FacebookIcon size={30} round={true} />
                        </FacebookShareButton>
                        <WhatsappShareButton url={shareUrl}>
                            <WhatsappIcon size={30} round={true}/>
                        </WhatsappShareButton>
                        
                    </div>
                    <Link to="/CardEdit"><button className='Customize-way'>Customize</button></Link>
                </div>
                
            </div>
            <div className="container-2">
            <h3><i>Description</i></h3>
            <p>{desc}</p>
            </div>
        </div>
        </>
    );
}

// export default CardShow;

