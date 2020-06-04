import React from "react";
import tumbaImage from "../assets/tumba.png";
import starImage from "../assets/Star.png";
import heartImage from '../assets/heart.svg';
import cartImage from '../assets/cart.png';

const Tumba = () => {
  const sales = ['Огого', 'Laska Family', 'Garda', 'DG Home'];
  return (
    <div className="tumba-item">
      <div className="photo">
        <img src={tumbaImage} alt="Tumba" className={'photo'}/>
      </div>
      <div className="name">Тумба прикроватная Rubus с двумя ящиками</div>
      <span className="rating">
        <img src={starImage} alt="star" width='15'/>
        <img src={starImage} alt="star" width='15'/>
        <img src={starImage} alt="star" width='15'/>
        <img src={starImage} alt="star" width='15'/>
        <img src={starImage} alt="star" width='15'/>
        <span className="rate">4.8</span>
      </span>
      <span className="price">56 720 P</span>
      <span className="info">Черный</span>
      <span className="info">Ткань</span>
      <span className="info">ш. 349 х в. 234 х г. 323</span>
      <span className="info">Французская раскладушка</span>
      {/* eslint-disable-next-line*/}
      <span className="info"><a href="#">{sales[Math.floor(Math.random() * sales.length)]}</a></span>
      <div className="buttons-panel">
        <button className="heart"><img src={heartImage} alt="heart"/></button>
        <button className="buy"><img src={cartImage} alt="" width='20'/>Купить</button>
      </div>
    </div>
  )
};

export default Tumba;