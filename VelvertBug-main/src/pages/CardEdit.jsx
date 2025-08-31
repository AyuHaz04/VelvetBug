import React, { useRef, useState, useContext, useEffect } from "react";
import { Rnd } from "react-rnd";
import html2canvas from "html2canvas";
import jsPDF from "jspdf"; // Import jsPDF
import "./CardEdit.css";
import { StoreContext } from "../assets/Components/Context/StoreContext";
// import { resolve } from "path";
import axios from "axios";

const CardEdit = () => {
  const { url, img, img1 } = useContext(StoreContext);
  const [texts, setTexts] = useState([
    {
      text: "",
      fontSize: 24,
      fontStyle: "Chopin Script",
      fontWeight: 400,
      color: "#000000",
      textSize: { width: 200, height: 50 },
      position: { x: 50, y: 50 },
    },
  ]);

  // const loadScript = (src) => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement('script');
  //     script.src = src;
  //     script.onload = () => {
  //       resolve(true);
  //     }
  //     script.onerror = () => {
  //       resolve(false);
  //     }
  //     document.body.appendChild(script);
  //   })
  // }

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
      document.body.appendChild(script);
    });
  };

  const onPayment = async () =>{
    // create order
    try {
      const options = {
        id : 1,
        amount : 100,
      }

      const res = await axios.post('http://localhost:4000/api/payment/createOrder', options);
      const data = res.data;

      console.log(data);

      const paymentObject = new Razorpay({
        key:"rzp_test_ONTjHForYe4I6Q",
        orderId: data.id,
        ...data,
        handler: function(response){
          console.log(response);
          const options2 = {
            orderId : response.razorpay_order_id,
            paymentId : response.razorpay_payment_id,
            signature : response.razorpay_signature,
          }
          axios.post('http://localhost:4000/api/payment/verifyPayment' , options2).then((res) => {
            console.log(res.data);
            if(res.data.success){
              alert('Payment Successful');
            }else{
              alert('Payment Failed');
            }
          }).catch((err) => {
            console.log(err);
          })
        }
      })
      
      paymentObject.open();

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadScript('https://checkout.razorpay.com/v1/checkout.js')
  },[])
  const imageRef = useRef(null);

  // Function to prevent right-click download
  const preventDownload = (e) => {
    e.preventDefault();
  };

  const handleTextChange = (index, e) => {
    const newTexts = [...texts];
    newTexts[index].text = e.target.value;
    setTexts(newTexts);
  };

  const handleFontSizeChange = (index, e) => {
    const newTexts = [...texts];
    newTexts[index].fontSize = e.target.value;
    setTexts(newTexts);
  };

  const handleFontStyleChange = (index, e) => {
    const newTexts = [...texts];
    newTexts[index].fontStyle = e.target.value;
    setTexts(newTexts);
  };

  const handleFontWeightChange = (index, e) => {
    const newTexts = [...texts];
    newTexts[index].fontWeight = e.target.value;
    setTexts(newTexts);
  };

  const handleColorChange = (index, e) => {
    const newTexts = [...texts];
    newTexts[index].color = e.target.value;
    setTexts(newTexts);
  };

  const handleAddTextbox = () => {
    const newText = {
      text: "",
      fontSize: 24,
      fontStyle: "Chopin Script",
      fontWeight: 400,
      color: "#000000",
      textSize: { width: 200, height: 50 },
      position: { x: 50, y: 50 },
    };
    setTexts([...texts, newText]);
  };

  const handleRemoveTextbox = (index) => {
    const newTexts = texts.filter((_, i) => i !== index);
    setTexts(newTexts);
  };

  // Function to download as image
  const handleDownloadImage = async () => {
    const scale = 300 / 96; // Convert to 300 DPI from 96 DPI

    const canvas = await html2canvas(imageRef.current, {
      useCORS: true,
      // scale: scale,
      // width: imageRef.current.offsetWidth * scale,
      // height: imageRef.current.offsetHeight * scale,
    });

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png", 1.0); // PNG for high quality
    link.download = "image-with-text-300dpi.png";
    link.click();
  };

  // Function to download as PDF
  const handleDownloadPDF = async () => {
    const scale = 3; // Increase scale for higher resolution
    const canvas = await html2canvas(imageRef.current, {
      useCORS: true,
      scale: scale,
    });

    const imgData = canvas.toDataURL("image/png", 1.0);

    // Create a new jsPDF document in A4 portrait size
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4"
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Calculate aspect ratio
    const imgAspectRatio = canvas.width / canvas.height;
    const pageAspectRatio = pageWidth / pageHeight;
    let renderWidth = pageWidth;
    let renderHeight = pageHeight;
    if (imgAspectRatio > pageAspectRatio) {
      renderHeight = pageWidth / imgAspectRatio;
    } else {
      renderWidth = pageHeight * imgAspectRatio;
    }
    const x = (pageWidth - renderWidth) / 2;
    const y = (pageHeight - renderHeight) / 2;
    pdf.addImage(imgData, "PNG", x, y, renderWidth, renderHeight);
    pdf.save("image-with-text.pdf");
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const imgStyle2 = {
    width: "30rem",
    height: "42rem",
    borderRadius: "10px",
    margin: "5vh",
  };

  return (
    <div className="App-main">
      <p className="CustomizeHead">Customize your card</p>
      <div className="container">
        <div className="image-section left-image">
          <div className="overlayDiv"></div>
          <img
            src={url + "/images/" + img}
            alt="Additional"
            style={imgStyle2}
          />
        </div>
        <div
          className="image-container"
          ref={imageRef}
          
        >
          <div className="overlayDiv1"></div>
          <img
            src={url + "/images/" + img1}
            alt="Placeholder"
            crossOrigin="anonymous"
            onLoad={handleImageLoad}
          />
          {texts.map((textItem, index) => (
            <Rnd
              key={index}
              className="draggable-text"
              size={{
                width: textItem.textSize.width,
                height: textItem.textSize.height,
              }}
              position={{ x: textItem.position.x, y: textItem.position.y }}
              bounds="parent"
              onDragStop={(e, d) => {
                const newTexts = [...texts];
                newTexts[index].position = { x: d.x, y: d.y };
                setTexts(newTexts);
              }}
              onResizeStop={(e, direction, ref, delta, position) => {
                const newTexts = [...texts];
                newTexts[index].textSize = {
                  width: ref.style.width,
                  height: ref.style.height,
                };
                newTexts[index].position = position;
                setTexts(newTexts);
              }}
            >
              <div
                className="overlay-text"
                style={{
                  fontSize: `${textItem.fontSize}px`,
                  fontFamily: textItem.fontStyle,
                  fontWeight: textItem.fontWeight,
                  color: textItem.color,
                }}
              >
                {textItem.text}
              </div>
            </Rnd>
          ))}
        </div>
        <div className="controls">
          {texts.map((textItem, index) => (
            <div key={index} className="text-controls">
              <label htmlFor="">Add Text</label>
              <input
                type="text"
                placeholder={`Enter text ${index + 1}`}
                value={textItem.text}
                onChange={(e) => handleTextChange(index, e)}
              />
              <label htmlFor="">Font Size</label>
              <input
                type="range"
                min="10"
                max="50"
                value={textItem.fontSize}
                onChange={(e) => handleFontSizeChange(index, e)}
              />
              <span className="fontSizeSize">{textItem.fontSize}px</span>
              <label htmlFor="">Font Weight</label>
              <input
                type="range"
                min="100"
                max="800"
                step="100"
                value={textItem.fontWeight}
                onChange={(e) => handleFontWeightChange(index, e)}
              />
              <span className="fontWeight">{textItem.fontWeight} </span>
              <br />
              <label htmlFor="">Font Style</label>
              <select
                value={textItem.fontStyle}
                onChange={(e) => handleFontStyleChange(index, e)}
              >
                <option value="Chopin Script">Chopin Script</option>
                <option value="Great Vibes">Great Vibes</option>
                <option value="Cinzel">Cinzel</option>
              </select>
              <label htmlFor="">
                <i className="fa-solid fa-palette"></i> Colour
              </label>
              <input
                type="color"
                value={textItem.color}
                onChange={(e) => handleColorChange(index, e)}
              />
              <button onClick={() => handleRemoveTextbox(index)}>Remove</button>
            </div>
          ))}
          <button onClick={handleAddTextbox}>Add Textbox</button>
        </div>
      </div>
      <div className="below-customize">
        {/* <button onClick={handleDownloadImage}> */}
        <button onClick={onPayment}>
          <i className="fa-solid fa-download"></i>Download Image
        </button>
        <button onClick={handleDownloadPDF}>
          <i className="fa-solid fa-download"></i>Download PDF
        </button>
      </div>
    </div>
  );
};

export default CardEdit;
