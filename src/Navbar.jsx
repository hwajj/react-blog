import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
const Navbar = (props) => {
  const [msg, setMsg] = useState(false);
  const colorChangeHandler = (e) => {
    console.log(e.target.value);
    props.colorSelector(e.target.value);
    //setMsg(true);
  };

  const colorChangerMessageHandler = () => {};
  return (
    <>
      <div className={styles.topnav}>
        <div className={styles.item}>내 소개</div>
        <div className={styles.item}>TIL</div>

        <input
          placeholder=' backGround color changer'
          id='base'
          type='color'
          name='selectedColor'
          initValue='white'
          value={props.bgColor}
          onMouseDown={colorChangerMessageHandler}
          onChange={colorChangeHandler}
        />
        {msg && (
          <div styles={{ color: !msg ? 'white' : 'black' }}>
            배경화면 바꾸는 이벤트임
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
