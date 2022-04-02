import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Navbar from './Navbar';

function App() {
  const [bgColor, setBgColor] = useState();

  const bgColorHandler = (selectedColor) => {
    // document.querySelector(`.${styles.App}`).style.setProperty('--selectedColor', selectedColor);
    setBgColor(selectedColor);
  };

  useEffect(() => {}, []);
  return (
    <div style={{ height: '100vh' }}>
      <Navbar colorSelector={bgColorHandler}></Navbar>
      <div
        className={`${styles.colorPickerGuide}`}
        style={{ backgroundColor: bgColor }}
      >
        guide message
      </div>
      <div className={`${styles.App}`} style={{ backgroundColor: bgColor }}>
        TEST 중
      </div>
    </div>
  );
}

export default App;
