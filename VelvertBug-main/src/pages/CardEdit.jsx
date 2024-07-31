import React, { useRef, useState,useContext } from 'react';
import { Rnd } from 'react-rnd';
import html2canvas from 'html2canvas';
import './CardEdit.css';
import { StoreContext } from '../assets/Components/Context/StoreContext'

const CardEdit = () => {
  const {url,img} = useContext(StoreContext);
  const [texts, setTexts] = useState([
    { text: '', fontSize: 24, fontStyle: 'Chopin Script', textSize: { width: 200, height: 50 }, position: { x: 50, y: 50 } }
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

  const handleAddTextbox = () => {
    const newText = { text: '', fontSize: 24, fontStyle: 'Chopin Script', textSize: { width: 200, height: 50 }, position: { x: 50, y: 50 } };
    setTexts([...texts, newText]);
  };

  const handleDownload = async () => {
    const canvas = await html2canvas(imageRef.current);
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'image-with-text.png';
    link.click();
  };

  return (
    <div className="App-main">
      <h1>Customize your card</h1>
      <div className="container">
        <div className="controls">
          {texts.map((textItem, index) => (
            <div key={index} className="text-controls">
              <input
                type="text"
                placeholder={`Enter text ${index + 1}`}
                value={textItem.text}
                onChange={(e) => handleTextChange(index, e)}
              />
              <input
                type="range"
                min="10"
                max="50"
                value={textItem.fontSize}
                onChange={(e) => handleFontSizeChange(index, e)}
              />
              <span>{textItem.fontSize}px</span>
              <select value={textItem.fontStyle} onChange={(e) => handleFontStyleChange(index, e)}>
                <option value="Chopin Script">Chopin Script</option>
                <option value="Great Vibes">Great Vibes</option>
                <option value="Cinzel">Cinzel</option>
              </select>
            </div>
          ))}
          <button onClick={handleAddTextbox}>Add Textbox</button>
          <button onClick={handleDownload}>Download Image</button>
        </div>
        <div className="image-container" ref={imageRef}>
          <img src={url + "/images/" + img} alt="Placeholder" />
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
              <div className="overlay-text" style={{ fontSize: `${textItem.fontSize}px`, fontFamily: textItem.fontStyle }}>
                {textItem.text}
              </div>
            </Rnd>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardEdit;
