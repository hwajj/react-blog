import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Navbar from './Navbar';

function App() {
  //const [bgColor, setBgColor] = useState();

  const bgColorHandler = (selectedColor) => {
    // console.log(selectedColor);
    const doms = document.querySelectorAll(
      `.${styles.App}, .${styles.colorPickerGuide}`
    );
    doms.forEach((dom) =>
      dom.style.setProperty('--selectedColor', selectedColor)
    );
    // setBgColor(selectedColor);
  };

  useEffect(() => {}, []);
  return (
    <div style={{ height: '100vh' }}>
      <Navbar colorSelector={bgColorHandler}></Navbar>
      <div className={`${styles.colorPickerGuide}`}>guide message</div>
      <div className={`${styles.App}`}>TEST 중</div>
    </div>
  );
}

export default App;
