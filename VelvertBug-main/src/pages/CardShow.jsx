import './CardShow.css';


export default function CardShow(){
    const imgStyle3 = {
        width: '80vh',
        height: 'auto',
        borderRadius: '10px',
        margin: '1vh',
    };
    return(
        <div className='CardShow'>
            <h1>Preview</h1>
            <div className="containerPreview">
                <div className="img-container">
                    <img src="../images/d1.jpg" alt="" style={imgStyle3} className='imgplace'/>
                </div>
                <div className="details">
                    <p>Card Size- 5' x 7'</p>
                    <p><i class="fa-regular fa-image"></i>Download Image</p>
                    <p><i class="fa-solid fa-file-pdf"></i>Download Pdf</p>
                    <p><span class="material-symbols-outlined">share</span>Share PDF</p>
                </div>
            </div>
            <div className="container-2">
            <button>Customize</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem aliquid officia sit dolor assumenda blanditiis, aliquam rerum nulla. Ea ipsa neque aperiam porro architecto ad eaque dignissimos nesciunt veniam!</p>
            </div>
        </div>
    )
}
