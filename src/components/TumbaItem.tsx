import React from "react";
import tumbaImage from "../assets/tumba.png";
import starImage from "../assets/Star.png";
import heartImage from '../assets/heart.svg';
import cartImage from '../assets/cart.png';

const Tumba = () => {
  const sales = ['Огого', 'Laska Family', 'Garda', 'DG Home'];
  return (
    <div className="tumba-item">
      <img src={tumbaImage} alt="Tumba" className={'photo'} width='148'/>
      <span className="name">Тумба прикроватная Rubus с двумя ящиками</span>
      <div className="rating">
        <img src={starImage} alt="star" width='15'/>
        <img src={starImage} alt="star" width='15'/>
        <img src={starImage} alt="star" width='15'/>
        <img src={starImage} alt="star" width='15'/>
        <img src={starImage} alt="star" width='15'/>
        <span className="rate">4.8</span>
      </div>
      <span className="price">56 720 P</span>
      <span>Черный</span>
      <span>Ткань</span>
      <span>ш. 349 х в. 234 х г. 323</span>
      <span>Французская раскладушка</span>
      {/* eslint-disable-next-line*/}
      <a href="#">{sales[Math.floor(Math.random() * sales.length)]}</a>
      <div className="buttons-panel">
        <button className="heart"><img src={heartImage} alt="heart"/></button>
        <button className="buy"><img src={cartImage} alt="" width='20'/>Купить</button>
      </div>
    </div>
  )
};

export default Tumba;