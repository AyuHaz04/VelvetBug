import "./Footer.css";

export default function Footer(){
    return(
        <>
         <hr  style={{color:"black"}}/>
        <div className="f-info">
           
            <div className="f-socials">
                <a href="https://www.facebook.com/velvetbugstore?mibextid=ZbWKwL"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/the.velvetbug/?igshid=ZDdkNTZiNTM%3D"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <p></p>
            <div className="f-contact">
                <p><i class="fa-solid fa-phone"></i>Contact No. : +91 6290 053 389</p>
                <p><i class="fa-solid fa-envelope"></i>Email :thevelvetbug29@gmail.com</p>
                {/* <p><span class="material-symbols-outlined">location_on</span>
                Address:Ambli-Bopal Road, Near ISKCON Temple, Ahmedabad, Gujarat-380058
                </p> */}
            </div>

        </div>
        </>
    )
}