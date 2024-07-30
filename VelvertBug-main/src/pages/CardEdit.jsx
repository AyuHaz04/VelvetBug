import React, { useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import html2canvas from 'html2canvas';
import './CardEdit.css';

const CardEdit = () => {
  const [text, setText] = useState('');
  const [fontSize, setFontSize] = useState(24);
  const [fontStyle, setFontStyle] = useState('Chopin Script');
  const [textSize, setTextSize] = useState({ width: 200, height: 50 });
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const imageRef = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleFontStyleChange = (e) => {
    setFontStyle(e.target.value);
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
          <input
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={handleTextChange}
          />
          <input
            type="range"
            min="10"
            max="50"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
          <span>{fontSize}px</span>
          <select value={fontStyle} onChange={handleFontStyleChange}>
            <option value="Chopin Script">Chopin Script</option>
            <option value="Great Vibes">Great Vibes</option>
            <option value="Cinzel">Cinzel</option>
          </select>
          <button onClick={handleDownload}>Download Image</button>
        </div>
        <div className="image-container" ref={imageRef}>
          <img src="https://via.placeholder.com/400" alt="Placeholder" />
          <Rnd
            className="draggable-text"
            size={{ width: textSize.width, height: textSize.height }}
            position={{ x: position.x, y: position.y }}
            bounds="parent"
            onDragStop={(e, d) => {
              setPosition({ x: d.x, y: d.y });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              setTextSize({
                width: ref.style.width,
                height: ref.style.height,
              });
              setPosition(position);
            }}
          >
            <div className="overlay-text" style={{ fontSize: `${fontSize}px`, fontFamily: fontStyle }}>
              {text}
            </div>
          </Rnd>
        </div>
      </div>
    </div>
  );
};

export default CardEdit;
