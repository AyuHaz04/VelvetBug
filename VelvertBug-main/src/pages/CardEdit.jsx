import React, { useRef, useState, useContext } from 'react';
import { Rnd } from 'react-rnd';
import html2canvas from 'html2canvas';
import './CardEdit.css';
import { StoreContext } from '../assets/Components/Context/StoreContext';

const CardEdit = () => {
  const { url, img, img1 } = useContext(StoreContext);
  const [texts, setTexts] = useState([
    { 
      text: '', 
      fontSize: 24, 
      fontStyle: 'Chopin Script', 
      fontWeight: 400, // Default font weight
      color: '#000000', 
      textSize: { width: 200, height: 50 }, 
      position: { x: 50, y: 50 } 
    }
  ]);
  const imageRef = useRef(null);

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
      text: '', 
      fontSize: 24, 
      fontStyle: 'Chopin Script', 
      fontWeight: 400, // Default font weight
      color: '#000000', 
      textSize: { width: 200, height: 50 }, 
      position: { x: 50, y: 50 } 
    };
    setTexts([...texts, newText]);
  };

  const handleRemoveTextbox = (index) => {
    const newTexts = texts.filter((_, i) => i !== index);
    setTexts(newTexts);
  };

  const handleDownload = async () => {
    const canvas = await html2canvas(imageRef.current,{
      useCORS: true,
    });
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'image-with-text.png';
    link.click();
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const imgStyle2 = {
    width: '30rem' ,
    height: '50rem',
    borderRadius: '10px',
    margin: '5vh',
  }

  return (
    <div className="App-main">
      <p className='CustomizeHead'>Customize your card</p>
      <div className="container">
        <div className="image-section left-image">
          <img
            src={url + "/images/" + img}
            alt="Additional"
            style={imgStyle2}
          />
        </div>
        <div className="image-container" ref={imageRef}>
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
              size={{ width: textItem.textSize.width, height: textItem.textSize.height }}
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
                  fontWeight: textItem.fontWeight, // Apply the font weight
                  color: textItem.color 
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
              <span className='fontSizeSize'>{textItem.fontSize}px</span>
              <label htmlFor="">Font Weight</label>
              <input
                type="range"
                min="100"
                max="800"
                step="100"
                value={textItem.fontWeight}
                onChange={(e) => handleFontWeightChange(index, e)}
              />
              <span className='fontWeight'>{textItem.fontWeight} </span><br />
              <label htmlFor="">Font Style</label>
              <select value={textItem.fontStyle} onChange={(e) => handleFontStyleChange(index, e)}>
                <option value="Chopin Script">Chopin Script</option>
                <option value="Great Vibes">Great Vibes</option>
                <option value="Cinzel">Cinzel</option>
              </select>
              <label htmlFor=""><i className="fa-solid fa-palette"></i> Colour</label>
              <input
                type="color"
                value={textItem.color}
                onChange={(e) => handleColorChange(index, e)}
              />
              <button onClick={() => handleRemoveTextbox(index)}>Remove</button> {/* Remove button */}
            </div>
          ))}
          <button onClick={handleAddTextbox}>Add Textbox</button>
          
        </div>
        
      </div>
      <div className="belowcustomize">
      <button onClick={handleDownload}><i className="fa-solid fa-download"></i>Download Image</button>
      </div>
    </div>
  );
};

export default CardEdit;
