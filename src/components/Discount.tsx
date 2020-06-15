import React from 'react';

interface IPrice {
  discount: boolean,
  current_price: string,
  old_price?: string
}

const Discount: React.FC<IPrice> = ({discount, current_price, old_price}) => {
  return (
    <span className={`price ${discount ? 'discount' : ''}`}>
        <span>{current_price}</span>
      {discount && <span className={'old-price'}>{old_price}</span>}
      </span>
  );
};

export default Discount;