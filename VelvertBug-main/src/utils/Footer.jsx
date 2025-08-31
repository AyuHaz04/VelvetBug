import "./Footer.css";

export default function Footer(){
    return(
        <>
        <div className="f-info">
            <div className="column">
                <div className="hed">
                    <img src="./images/logo.png" alt="" className="logo-footer"/>
                    <h2>TheVelvetbug</h2>
                </div>
                <div className="copyright">
                <p><i className="fa-regular fa-copyright"></i>Copyright Trademak</p>
                </div>
            </div>
        
          
            <div className="column socials">
                <p>Social Media Links</p>
            <div className="f-socials">
                <a href="https://www.facebook.com/velvetbugstore?mibextid=ZbWKwL"><i className="fa-brands fa-facebook fa-2x"></i></a>
                <a href="https://youtube.com/@the.velvetbug?si=XS72Xj-lKuydoIEm"><i className="fa-brands fa-youtube fa-2x"></i></a>
                <a href="https://www.instagram.com/the.velvetbug/?igshid=ZDdkNTZiNTM%3D"><i className="fa-brands fa-instagram fa-2x"></i></a>
            </div>
            </div>
            
            <div className="column contact">
            <p>Contact Info:</p>
            <div className="f-contact">
                <p><i className="fa-brands fa-whatsapp fa-2x"></i> Whatsapp No. : +91 6290 053 389</p>
                <p><i className="fa-solid fa-envelope fa-2x"></i> Email : thevelvetbug29@gmail.com</p>
            </div>
            </div>
        </div>
        </>
    )
}