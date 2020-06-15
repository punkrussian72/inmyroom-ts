import React from "react";
import tumbaImage from "../assets/tumba.png";
import heartImage from '../assets/heart.svg';
import cartImage from '../assets/cart.png';
import Discount from './Discount';
import Rating from "./Rating";

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
  const {discount, current_price, old_price} = price;
  return (
    <div className="tumba-item">
      <div className="photo">
        <img src={tumbaImage} alt="Tumba" className={'photo'}/>
      </div>
      <div className="name">{name}</div>
      <Rating rating={rating} />
      <Discount discount={discount} current_price={current_price} old_price={old_price} />
      <span className="info">{color}</span>
      <span className="info">{material}</span>
      <span className="info">{size}</span>
      <span className="info">{mechanism}</span>
      {/* eslint-disable-next-line*/}
      <span className="info"><a href="#">{seller}</a></span>
      <div className="buttons-panel">
        <button className="heart"><img src={heartImage} alt="heart"/></button>
        <button className="buy"><img src={cartImage} alt="" width='20'/><p>Купить</p></button>
      </div>
    </div>
  )
};

export default Tumba;