import React from "react";
import tumbaImage from "../assets/tumba.png";
import starImage from "../assets/Star.png";
import heartImage from '../assets/heart.svg';
import cartImage from '../assets/cart.png';

export interface ITumba {
  name: string,
  rating: string,
  price: {
    discount: boolean,
    current_price: string,
    old_price?: string
  },
  color: string,
  material: string,
  size: string,
  mechanism: string,
  seller: string
}

const Tumba: React.FC<ITumba> = (
  {
    name,
    rating,
    price,
    color,
    material,
    size,
    mechanism,
    seller
  }
) => {
  const sales = ['Огого', 'Laska Family', 'Garda', 'DG Home'];
  const discount = Math.floor(Math.random() * 2) > 0;
  return (
    <div className="tumba-item">
      <div className="photo">
        <img src={tumbaImage} alt="Tumba" className={'photo'}/>
      </div>
      <div className="name">Тумба прикроватная Rubus с двумя ящиками</div>
      <span className="rating">
        <img src={starImage} alt="star" width='16'/>
        <img src={starImage} alt="star" width='16'/>
        <img src={starImage} alt="star" width='16'/>
        <img src={starImage} alt="star" width='16'/>
        <img src={starImage} alt="star" width='16'/>
        <div className="rate">4.8</div>
      </span>
      <span className={`price ${discount ? 'discount' : ''}`}>
        <span>56 720 P</span>
        {discount && <span className={'old-price'}>67 736 Р</span>}
      </span>
      <span className="info">Черный</span>
      <span className="info">Ткань</span>
      <span className="info">ш. 349 х в. 234 х г. 323</span>
      <span className="info">Французская раскладушка</span>
      {/* eslint-disable-next-line*/}
      <span className="info"><a href="#">{sales[Math.floor(Math.random() * sales.length)]}</a></span>
      <div className="buttons-panel">
        <button className="heart"><img src={heartImage} alt="heart"/></button>
        <button className="buy"><img src={cartImage} alt="" width='20'/><p>Купить</p></button>
      </div>
    </div>
  )
};

export default Tumba;