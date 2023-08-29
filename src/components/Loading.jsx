import React from 'react';
import style from './Loading.module.css';

const Loading = () => {
  return (
    <div className={style.letter}>
      <p className={style.text}>
        <span className={style.letter1}>L</span>
        <span className={style.letter2}>o</span>
        <span className={style.letter3}>a</span>
        <span className={style.letter4}>d</span>
        <span className={style.letter5}>i</span>
        <span className={style.letter6}>n</span>
        <span className={style.letter7}>g</span>
        <span className={style.letter8}>.</span>
        <span className={style.letter9}>.</span>
        <span className={style.letter10}>.</span>
      </p>
    </div>
  );
};

export default Loading;
